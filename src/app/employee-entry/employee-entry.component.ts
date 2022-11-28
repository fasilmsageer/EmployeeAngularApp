import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent {
  name=""
  designation=""
  salary=""
  email=""
  EmployeeId=""


  readValue=()=>
  {
    let data:any={"name":this.name,
    "designation":this.designation,
    "salary":this.salary,
    "email":this.email,
    "EmployeeId":this.EmployeeId}
    console.log(data)
  }
  

}
