import {Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DataService } from '../core/services/data.service';
import {Response} from '@angular/http';
declare var Highcharts:any;
@Component({ 
  moduleId: module.id,
  selector: 'dashboard-container', 
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {


ngOnInit(){
  Highcharts.chart('chart2', {

    title: {
        text: 'Employee Records'
    },
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2009
        }
    },

    series: [{
        name: 'Scrum 1',
        data: [43, 52, 57, 69, 97, 119, 137, 154]
    }, {
        name: 'Scrum 2',
        data: [24, 24, 29, 29, 32, 30, 38, 40]
    }, {
        name: 'Scrum 3',
        data: [11, 17, 16, 19, 20, 24, 32, 39]
    }]

});


 Highcharts.chart('chart1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Resources'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'SI',
                y: 56.33
            }, {
                name: 'AO',
                y: 24.03,
                sliced: true,
                selected: true
            }]
        }]
    });
}
constructor(){
  



 
}
 

}