import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProdService } from '../_services/prod.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.page.html',
  styleUrls: ['./addprod.page.scss'],
})
export class AddprodPage implements OnInit {

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