import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attestation } from '../attestation';
import { AttestationService } from '../attestation.service';

@Component({
  selector: 'app-demandemission',
  templateUrl: './demandemission.page.html',
  styleUrls: ['./demandemission.page.scss'],
})
export class DemandemissionPage implements OnInit {
at:any=[]
comptes:Attestation= new Attestation();


  constructor(private serv:AttestationService,private route:Router) { }

  ngOnInit() {
    this.getall()
  }
  getall(){
    this.serv.getall().subscribe(
      data => {
        this.at = data; console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );



  }
  add()
  {
  
  this.serv.save(this.comptes).subscribe(

    data=>{this.route.navigate(['/home'])
  this.ngOnInit()},
    erre=>{}
  )



}


}
