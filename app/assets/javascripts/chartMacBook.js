window.addEventListener('load', function() {
    var spec1 = gon.air_spec
    var spec2 = gon.inch13_spec
    var spec3 = gon.inch16_spec
    Highcharts.chart('mac-spec', {
        chart: {type: 'bar'},
        title: {text: 'MacBook'},
        xAxis: {type: 'category',uniqueNames: false},
        yAxis: {min: 0,title: {text: '<User>'}},
        credits: {enabled: false},
        series: [{
            colorByPoint: true,
            name: 'Share',
            data: [{
                name: 'Air ',
                y: spec1, color: '#6666FF'
            }, {
                name: 'Pro 13inch',
                y: spec2, color: '#6666FF'
            }, {
                name: 'Pro 15-16inch',
                y: spec3, color: '#6666FF'
            }],
            showInLegend: false
        }]
    });
});







