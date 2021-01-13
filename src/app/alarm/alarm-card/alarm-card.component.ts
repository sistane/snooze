import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.css']
})


export class AlarmCardComponent implements OnInit {
  @Input() day: string = ''
  @Input() time: string = ''
  alarmToggle = true
  istoday=false
  week: string[]= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  constructor() { }

  ngOnInit(): void {
    var currentdate= new Date()
    console.log(currentdate.getDay())
    console.log(this.week.indexOf(this.day))
    if(this.week.indexOf(this.day)===currentdate.getDay())
    {this.istoday=true
    console.log(this.istoday)}
  }

}
