import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useStyles } from "./Post";

const Add = () => {
    const [editorState, setEditorState] = React.useState(
      () => EditorState.createEmpty(),
    );

    const classes = useStyles();

    console.log(editorState);
  
    return (
        <Card className={classes.root} style={{overflow: 'inherit'}}>
            <CardContent style={{padding: 0}}>
                <Editor 
                    toolbarClassName={classes.toolbarClassName}
                    editorClassName={classes.editorClassName} 
                    onChange={setEditorState} 
                    onEditorStateChange={setEditorState}
                />
                <div style={{textAlign: 'right', padding: 5}}>
                    <Button disabled={editorState.blocks === undefined} className={classes.postBtn}>Add post</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default Add;