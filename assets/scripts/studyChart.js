'use strict'
{
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['content', 'percent'],
      ['ドットインストール', 42],
      ['N予備校',      33],
      ['POSSE課題', 25], 
    ]);

    var options = {
      title: '学習コンテンツ',
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('studyChart'));
    chart.draw(data, options);
  }
}