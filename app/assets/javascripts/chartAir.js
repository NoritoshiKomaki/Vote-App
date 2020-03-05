window.addEventListener('load', function() {
    $('#btn-air').click(function() {
        $('#display-air').show();
        $('#display-inch13').hide();
        $('#display-inch16').hide();
        $('#btn-air').animate({ opacity: 1 });
        $('#btn-13').animate({ opacity: 0.7 });
        $('#btn-16').animate({ opacity: 0.7 });
        var memory1 = gon.air_memory1
        var memory2 = gon.air_memory2
        var pieColors = (function () {
            var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;
            return colors;
        }());
        Highcharts.chart('air-memory', {
            chart: {type: 'pie'},
            title: {text: 'MEMORY'},
            exporting : {enabled: false},
            credits: {enabled: false},
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: pieColors,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            series: [{
                name: 'Share',
                data: [
                    { name: '8GB', y: memory1, color: 'crimson' },
                { name: '16GB', y: memory2, color: 'mediumblue' }
            ]
        }]
    });
    
    var storage1 = gon.air_storage1
    var storage2 = gon.air_storage2
    var storage3 = gon.air_storage3
    var storage4 = gon.air_storage4
    var pieColors = (function () {
        var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;
        return colors;
    }());
    Highcharts.chart('air-storage', {
        chart: {type: 'pie'},
        title: {text: 'STORAGE'},
        exporting : {enabled: false},
        credits: {enabled: false},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: pieColors,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Share',
            data: [
                { name: '128GB', y: storage1, color: 'crimson' },
                { name: '256GB', y: storage2, color: 'mediumblue' },
                { name: '512GB', y: storage3, color: 'orange' },
                { name: '1TB', y: storage4, color: 'green' }
            ]
        }]
    });
});
});

