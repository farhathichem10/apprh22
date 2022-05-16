import { getLocaleDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
 

  constructor(private http: HttpClient) {
  
   }
   getallprod()
   {
     return this.http.get("http://localhost:8080/prod/getall")
   }
   save(s: any)
   {
   
     return this.http.post("http://localhost:8080/prod/save",s)
   }
   deleteprod(id:number){
     return this.http.delete("http://localhost:8080/prod/delete/"+id)
   }
   getprodbyid(id:number){
     return this.http.get("http://localhost:8080/prod/getprodbyid/"+id)
   }
   updateprod(id:number,data){
     
   
    return this.http.put("http://localhost:8080/prod/updateprod/"+id,data)
  }

}
