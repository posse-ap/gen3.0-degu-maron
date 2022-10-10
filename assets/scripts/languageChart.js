'use strict'
{
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Language', 'percent'],
      ['Javascript', 42],
      ['CSS', 18],
      ['PHP',  10],
      ['HTML', 10],
      ['Laravel', 8],
      ['SQL', 6],
      ['SHELL', 4],
      ['情報システム基礎知識(その他)', 2]
    ]);

    var options = {
      title: '学習言語',
      pieHole: 0.4,
      legend: {
        position: 'bottom',
        // alignment: 'end',
      }
    };

    var chart = new google.visualization.PieChart(document.getElementById('languageChart'));
    chart.draw(data, options);
  }
}