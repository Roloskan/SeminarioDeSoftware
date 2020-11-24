import { summaryFileName } from '@angular/compiler/src/aot/util';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  username:string;
  password:string;
  
  constructor() { 
    
  }



        ngOnInit(){

        }     

        logInUser(){
          if(this.username == "admin" && this.password == "admin"){
            console.log("Bienvenido al sistema!");
            alert("Bienvenido, "  + this.username)
            window.open('/Tienda')
          }
          else{
            console.log("Lo siento, no estas autorizado");
            alert("Tus datos no estan autorizados, "  + this.username)
          }
        }

        
}