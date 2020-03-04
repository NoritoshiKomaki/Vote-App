window.addEventListener('load', function() {
    $('#btn-16').click(function() {
        $('#display-air').hide();
        $('#display-inch13').hide();
        $('#display-inch16').show();
        $('#btn-air').animate({ opacity: 0.7 });
        $('#btn-13').animate({ opacity: 0.7 });
        $('#btn-16').animate({ opacity: 1 });
        var cpu1 = gon.inch16_cpu1
        var cpu2 = gon.inch16_cpu2
        var pieColors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],
                i;
            return colors;
        }());
        Highcharts.chart('inch16-cpu', {
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
                    { name: 'Intel Core i7', y: cpu1, color: 'crimson' },
                    { name: 'Intel Core i9', y: cpu2, color: 'mediumblue' }
                ]
            }]
        });

        var memory1 = gon.inch16_memory1
        var memory2 = gon.inch16_memory2
        var memory3 = gon.inch16_memory3
        var pieColors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],
                i;
            return colors;
        }());
        Highcharts.chart('inch16-memory', {
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
                    { name: '16GB', y: memory1, color: 'orange' },
                    { name: '32GB', y: memory2, color: 'green' },
                    { name: '64GB', y: memory3, color: 'purple' }
                ]
            }]
        });

        var storage1 = gon.inch16_storage1
        var storage2 = gon.inch16_storage2
        var storage3 = gon.inch16_storage3
        var storage4 = gon.inch16_storage4
        var storage5 = gon.inch16_storage5
        var pieColors = (function () {
            var colors = [],
                base = Highcharts.getOptions().colors[0],
                i;
            return colors;
        }());
        Highcharts.chart('inch16-storage', {
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
                    { name: '512GB', y: storage1, color: 'crimson' },
                    { name: '1TB', y: storage2, color: 'mediumblue' },
                    { name: '2TB', y: storage3, color: 'orange' },
                    { name: '4TB', y: storage4, color: 'green' },
                    { name: '8TB', y: storage5, color: 'purple' }
                ]
            }]
        });
    });
});