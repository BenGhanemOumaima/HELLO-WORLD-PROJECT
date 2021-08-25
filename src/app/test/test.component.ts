import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = "Oumaima";
  imageUrl = "assets/images/FormaLab.png";

  booksList = [/*'learn angular 9','get started with android','Java From Scratch'*/];
  
  myCondition = false;
  constructor() { }

  ngOnInit(): void {
  }

  hello(myname:String){
    alert('Hello '+myname);
  }
}
