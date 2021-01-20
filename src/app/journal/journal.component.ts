import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label} from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  
  // donut graph styles and data
  public doughnutChartLabels: Label= ['Deep','Light','REM','Awake'];
  
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,25], 
  ];

  
  public doughnutChartType: ChartType = 'doughnut';
  public barChartOptions:any = {
    legend: {
     
      position: 'right',
      labels: {
        boxWidth:10, borderWidth:0, padding:20, fontColor: 'white'
      },
      
     
    }
  }

  // barchart data and styles
  public barChartOptions2: ChartOptions = {
    responsive: true,
    legend: {
      labels: { fontColor: 'white' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'transparent' }
      }],
      yAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'transparent' }
      }]
    }
  };
  public barChartLabels: Label[] = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Deep' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'REM' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Light' },
  ];
// line chart data
  public lineChartData: ChartDataSets[] = [
    { data: [70, 72, 69, 75, 70, 73, 70], label: 'Heart' },
    {data: [91, 90, 92, 95, 94, 93, 91], label: 'SP02' },
  ];
  public lineChartLabels: Label[] = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM']
  public lineChartOptions: any = {
    responsive: true,
    
    legend: {
      labels: { fontColor: 'white' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'transparent' }
      }],
      yAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'transparent' }
      }]
    }
    
  }

  // line chart varibles
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  constructor() { }

  ngOnInit(): void {
  }

}
