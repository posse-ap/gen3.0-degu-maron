'use strict'

{
  let type = 'bar';

  const data = {
    labels: ['', 2, '', 4, '', 6, '', 8, '', 10, '', 12, '', 14, '', 16, '', 18, '', 20, '', 22, '', 24, '', 26, '', 28, '', 30, ''],
    datasets: [{
      label: '',
      data: [2.5, 4.3, 1.0, 3.3, 3.3, 4.0, 6.2, 7.3, 1.5, 4.0, 2.0, 5.5, 7.0, 8.0, 5.5, 3.7, 4.3, 0.7, 0.7, 1.0, 4.0, 2.5, 5.5, 1.5, 6.2, 8.0, 8.0, 2.5, 0.7, 4.0, 1.3]
    }]
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          color: 'rgb(50, 101, 255)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(50, 101, 255)',
          suggestedMin: 0,
          suggestedMax: 8,
          stepSize: 2,
          callback: function(value, index, values){
            return value + 'h';
          }
        },
        grid: {
          display: false,
          drawBorder: false,
        }
      },
    },
    animation: false,
    plugins: {
      legend: {
        display: false
      },
    },
  };

  const ctx = document.getElementById('barGraph').getContext('2d');
  const hoursGraph = new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  })
}