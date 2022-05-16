import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdService } from '../_services/prod.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  prod:any=[]
  public term: string;
  p:number=1


  constructor(private serv:ProdService,private route:Router) { }

  ngOnInit() {
    this.getall()
    console.log("eeeeeeeeeeeee"+this.prod)
  }
  getall(){
    this.serv.getallprod().subscribe(
      data => {
        this.prod = data; console.log(  data);
      },
      err => {
        console.log(err);
      }
      );



  }
  delete(id)
      {
      this.serv.deleteprod(id).subscribe(
        data=>{ this.ngOnInit()},
        erre=>{}
      )
      }



}
