import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekcomp',
  templateUrl: './weekcomp.component.html',
  styleUrls: ['./weekcomp.component.css']
})
export class WeekcompComponent implements OnInit {
  @Input() day: string = ''


  public value: Date = new Date ();
  
  constructor() { }

  ngOnInit(): void {
  }

}
