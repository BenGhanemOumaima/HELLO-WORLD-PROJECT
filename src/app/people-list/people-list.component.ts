import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList = [
    {
      id: 1,
      name: 'Ayoub',
      username: "FormaLab",
      phone: 25879456
    },
    {
      id: 2,
      name: 'Oumaima',
      username: "GH",
      phone: 25874956
    },
    {
      id: 3,
      name: 'Ali',
      username: "Django",
      phone: 25123789
    },
    {
      id: 4,
      name: 'Salah',
      username: "CM",
      phone: 25001050
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

  delete(person:any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);   
  }

  myCondition = true;

}
