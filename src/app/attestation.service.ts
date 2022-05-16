import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttestationService {

  constructor(private http: HttpClient) { }
  getall()
  {
    return this.http.get("http://localhost:8080/attestation/getall")
  }
  save(s:any)
  {
    return this.http.post("http://localhost:8080/attestation/save",s)
  }
}
