import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  constructor(private route:Router) { }
  
  ngOnInit(): void {
  }
  navigateToBack(){
    this.route.navigateByUrl('/home')
  }
  navigateToSettings(){
    this.route.navigateByUrl('/settings')
  }

}

