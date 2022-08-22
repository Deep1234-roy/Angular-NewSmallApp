import { Component, Input, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  age: number;
  address: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Deep Roy', age: 24, address: 'Kolkata'},
  {name: 'Asif Akhtar', age: 27, address: 'Patna'},
  {name: 'Sujoy Das', age: 30, address: 'Pune'},
  {name: 'MD. Alam', age: 31, address: 'Chennai'},
  {name: 'Pratik Yadav', age: 32, address: 'New Delhi'}
];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-registerchild',
  templateUrl: './registerchild.component.html',
  styleUrls: ['./registerchild.component.css']
})
export class RegisterchildComponent implements OnInit {

  @Input() nameData:any;
  @Input() ageData:any;
  @Input() addressData:any;


 

  displayedColumns: string[] = ['name', 'age', 'address'];
  dataSource = ELEMENT_DATA;

  GetDetails(){
    return this.dataSource;
  }

  UpdateDetails(obj:any){
    return this.dataSource.push(obj);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
