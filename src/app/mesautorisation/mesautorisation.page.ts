import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesautorisation',
  templateUrl: './mesautorisation.page.html',
  styleUrls: ['./mesautorisation.page.scss'],
})
export class MesautorisationPage implements OnInit {
  term:string
  p:number=1

  constructor() { }

  ngOnInit() {
  }

}
