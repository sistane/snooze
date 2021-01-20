import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wc',
  templateUrl: './wc.component.html',
  styleUrls: ['./wc.component.css']
})
export class WcComponent implements OnInit {
  @Input() day: string = ''
  @Input() time: string = ''  
  @Input() stage1: string = ''
  @Input() stage2: string = ''
  @Input() score: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
