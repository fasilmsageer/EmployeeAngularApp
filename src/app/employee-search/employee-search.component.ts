import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  Employeecode=""
  

  readValue=()=>
  {
    let data:any={"Employeecode":this.Employeecode}
    console.log(data)
  
}

}
