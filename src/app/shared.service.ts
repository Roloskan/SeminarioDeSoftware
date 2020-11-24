import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:53606/api";
  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Registrarse');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/Registrarse',val);
  }
  updateUser(val:any){
    return this.http.put(this.APIUrl+'/Registrarse',val);
  }
  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/Registrarse/'+val);
  }
}
