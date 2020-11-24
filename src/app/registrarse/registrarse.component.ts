import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() User:any;
  UserEmail: string;
  UserPassword: string;

  ngOnInit(): void {
    this.UserEmail=this.UserEmail;
    this.UserPassword=this.UserPassword;
  }

  addUser(){
    var val = {UserEmail:this.UserEmail,
              UserPassword:this.UserPassword
              };

    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}