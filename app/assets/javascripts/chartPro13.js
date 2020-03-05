window.addEventListener('load', function() {
    $('#btn-13').click(function() {
        $('#display-air').hide();
        $('#display-inch13').show();
        $('#display-inch16').hide();
        $('#btn-air').animate({ opacity: 0.7 });
        $('#btn-13').animate({ opacity: 1 });
        $('#btn-16').animate({ opacity: 0.7 });
        var cpu1 = gon.inch13_cpu1
        var cpu2 = gon.inch13_cpu2
        var pieColors = (function () {
            var colors = [],
                base = Highcharts.getOptions().  colors[0],
                i;
            return colors;
        }());
        Highcharts.chart('inch13-cpu', {
            chart: {type: 'pie'},
            title: {text: 'CPU'},
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
                    { name: 'Intel Core i5', y: cpu1, color: 'crimson' },
                    { name: 'Intel Core i7', y: cpu2, color: 'mediumblue' }
                ]
            }]
        });

        var memory1 = gon.inch13_memory1
        var memory2 = gon.inch13_memory2
        var pieColors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],       i;
            return colors;
        }());
        Highcharts.chart('inch13-memory', {
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
                data: [
                    { name: '8GB', y: memory1, color: 'orange' },
                    { name: '16GB', y: memory2, color: 'green' }
                ]
            }]
        });

        var storage1 = gon.inch13_storage1
        var storage2 = gon.inch13_storage2
        var storage3 = gon.inch13_storage3
        var storage4 = gon.inch13_storage4
        var storage5 = gon.inch13_storage5
        var pieColors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],
                i;
            return colors;
        }());
        Highcharts.chart('inch13-storage', {
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
                    { name: '1TB', y: storage4, color: 'green' },
                    { name: '2TB', y: storage5, color: 'purple' }
                ]
            }]
        });
    });
});