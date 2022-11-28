import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {

  Employeecode=""
  



  readValue=()=>
  {
    let data:any={"Employeecode":this.Employeecode}
    console.log(data)
  
}
}
