import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label} from 'ng2-charts';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.css']
})
export class WeekviewComponent implements OnInit {

  public doughnutChartLabels: Label= [];
 
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,25],

    
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public barChartOptions:any = {
    legend: {
      elements:{
        arc:{
          borderWidth:0
        }
      },
      position: 'right',
      labels: {
        boxWidth:10, padding:20
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
