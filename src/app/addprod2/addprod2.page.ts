import { Component, NgZone, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProdService } from '../_services/prod.service';

@Component({
  selector: 'app-addprod2',
  templateUrl: './addprod2.page.html',
  styleUrls: ['./addprod2.page.scss'],
})
export class Addprod2Page implements OnInit {
  prod:Produit= new Produit();


  constructor(private serv: ProdService,
    private router: Router) {}
  ngOnInit() { }
  add()
      {
      
      this.serv.save(this.prod).subscribe(
  
        data=>{this.router.navigate(['/home'])
      },
        erre=>{}
      )

 
}}