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
      username: "Ghozzi",
      phone: 25879456
    },
    {
      id: 2,
      name: 'Ayoub',
      username: "Ghozzi",
      phone: 25879456
    },
    {
      id: 3,
      name: 'Ayoub',
      username: "Ghozzi",
      phone: 25879456
    },
    {
      id: 4,
      name: 'Ayoub',
      username: "Ghozzi",
      phone: 25879456
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
