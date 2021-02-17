import palette from '../../../../theme/palette';

export const data = {
  labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
  datasets: [
    {
      label: 'Last year',
      backgroundColor: palette.neutral,
      borderWidth: 2,
      borderColor: '#f9f9f9',
      pointBackgroundColor: '#ff0000',
      pointBorderColor: '#ff0000',
      data: [20, 12, 29, 30, 25, 13]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: true,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.palette.background2,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 5 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary,
          display: false
        },
        gridLines: {
          color: palette.palette.background2
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          display: false,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          color: palette.palette.background2
        }
      }
    ]
  },
  chartArea: {
    backgroundColor: palette.background
  }
};
