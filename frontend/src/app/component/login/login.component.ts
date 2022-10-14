import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'project';
  user={
    email:'',
    pass:''
}
onsubmit(){
  alert((JSON.stringify(this.user)))
}

  constructor() { }

  ngOnInit(): void {
  }

}
