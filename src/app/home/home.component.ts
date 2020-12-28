import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  prev() {
    document.getElementById('slider-container').scrollLeft -= 270;
  }

  next() {
    document.getElementById('slider-container').scrollLeft += 270;
  }


  // $(".slide img").on("click" , function(){
  // 	$(this).toggleClass('zoomed');
  // 	$(".overlay").toggleClass('active');
  // })

}

