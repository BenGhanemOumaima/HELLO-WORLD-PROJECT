import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  booksList:any[] = [];
  usersList:any[]=[];
  myCondition = false;
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList=result;
      }
      ,
      error => {
        console.log(error);
      }
      )
  }

  /*myForm : FormGroup
  constructor(private fb:FormBuilder) { 
    let formControls = {
      firstname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
    }

    this.myForm = this.fb.group(formControls);
  }


  get firstname(){
    return this.myForm.get('firstname');
  }


  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.myForm.value);
  }*/

}
