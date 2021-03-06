import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label} from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alarmToggle = true

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,25],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public barChartOptions:any = {
    legend: {position: 'bottom'}
  }

  constructor() { }
  ngOnInit(): void {
  }

 

}




