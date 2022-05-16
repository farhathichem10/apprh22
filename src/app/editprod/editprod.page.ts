import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProdService } from '../_services/prod.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.page.html',
  styleUrls: ['./editprod.page.scss'],
})
export class EditprodPage implements OnInit {
  ionicForm: FormGroup;

  id:number
 public  p:any
  constructor(public formBuilder: FormBuilder,private serv6: ProdService ,private ac:ActivatedRoute,private route:Router ) { 
    this.id=this.ac.snapshot.params['id'];
    this.ionicForm = this.formBuilder.group({
      nom: [this.p.nom,[] ],
      qte: [this.p.qte,[]],
   })
  }
  ngOnInit() {
    this.gettcatbyid()
   

  }
  gettcatbyid(){this.serv6.getprodbyid(this.id).subscribe(
    data => { this.p=data
      console.log(data) },
    err => { console.log})}
    updatecp() {
      this.serv6.updateprod(this.p.id, this.p)
        .subscribe(
          data=>{this.route.navigate(['/home'])},
erre=>{}
);
    }




  





}
