import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {EditorState, convertToRaw} from 'draft-js';
import { Editor, ContentState  } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useStyles } from "./Post";
import Helper from '../../_services/Helper';

const helper = new Helper();

const Add = (props) => {
    const classes = useStyles();
    const options = {
        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'colorPicker', 'link', 'emoji', 'history']
    }
    const [editorState, setEditorState] = React.useState(
      () => EditorState.createEmpty(),
    );
    const [loading, setLoading] = React.useState(false);
    const [images, setImages] = React.useState(null);
    const [errors, setErrors] = React.useState([]);
    
    const imagesCount = (() => {
        return images === null?0:images.target.files.length;
    })
    const textCount = (() => {
        return editorState.getCurrentContent().getPlainText().length;
    })
    const isEmpty = (() => {
        return textCount() === 0 && imagesCount() === 0;
    })

    const NewPost = (() => {
        const files = imagesCount() === 0?[]:images.target.files;
        let formData = new FormData();
        formData.append('text', textCount() === 0?'':draftToHtml(convertToRaw(editorState.getCurrentContent())));

        for (let i = 0; i < files.length; i++) {
            formData.append('images[]', files[i], files[i].name);
        }
        setLoading(true);
        setErrors([]);// reseet error
        helper.api('/posts', function(response) {
            setLoading(false);
            if(!response.status){
                setErrors(response.data);
            }else{
                //const _editorState = EditorState.push(editorState, ContentState.createFromText(''));
                //setEditorState(_editorState);
                setImages(null);
                setErrors([]);
                props.addPost(response.data);
            }
        }, formData, 'post', {'Content-Type' : 'multipart/form-data'});
    })
  
    return (
        <Card className={classes.root} style={{overflow: 'inherit'}}>
            <CardContent style={{padding: 0, minHeight: "6em"}}>
                <Editor 
                    toolbarClassName={classes.toolbarClassName}
                    editorClassName={classes.editorClassName} 
                    onEditorStateChange={setEditorState}
                    toolbar={options}
                    placeholder="Whats on your mind..."
                />
                
                {helper.getNotification(errors)}

                <div className={classes.upload}>
                    <Tooltip title="Upload multiple picture" placement="top" arrow>
                        <label htmlFor="images">
                            <IconButton color="inherit" aria-label="Upload multiple picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Tooltip>
                    <input onChange={setImages} accept="image/*" name="images" id="images" type="file" multiple />
                    <span>{imagesCount()} Image(s)</span>
                </div>
                <div style={{textAlign: 'right', padding: 5}}>
                    <Button disabled={isEmpty() || loading} className={classes.postBtn} onClick={() => NewPost()}>Add post</Button>
                </div>
            </CardContent>
            
        </Card>
    );
}

Add.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Add;