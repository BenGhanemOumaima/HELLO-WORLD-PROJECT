import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  /*peopleList = [
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
  ];*/

  peopleList:any[] =[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result =>{
        this.peopleList = result;
      }
      ,
      error =>{
        console.log(error);
      }
    )
  }

  delete(person:any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);   

    this.userService.deleteUser(person.id).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

  myCondition = true;

}
