import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterchildComponent } from '../registerchild/registerchild.component';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  panelOpenState = false;
  msg = '';
  flag=false;
  NameValue = '';
  ageValue=10;
  AddressValue = '';
  inputObj = {name:"",age:10,address:""};
  @ViewChild(RegisterchildComponent) viewData:any;
  constructor() { }

  openForm() {
    this.flag = true;
    this.msg = "Clicked the Button";
  }

  SubmitData(name:any,age:any,address:any){
    this.NameValue = name;
    this.ageValue = age;
    this.AddressValue = address;
    this.inputObj = {name:name,age:age,address:address};
    this.viewData.UpdateDetails(this.inputObj);
    console.log(name + " , " + age + " , " + address);
  }

  ngOnInit(): void {
  }

}
