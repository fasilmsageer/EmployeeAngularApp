import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  Username=""
  Password=""



  readValue=()=>
  {
    let data:any={"Username":this.Username,
    "Password":this.Password}
    console.log(data)
  
  if (this.Username=="admin" && this.Password=="12345") {
    alert("valid credentials")
    
  } else {
    alert("invalid credentials")
  }
}
}
