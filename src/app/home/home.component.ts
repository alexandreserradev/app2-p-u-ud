import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';

import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas();
    this.ofertasService.getOfertas2()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
        console.log('Resolvido depois de 3 segundos');
      })
      .catch(erro => {
        console.log(erro);
      });

    console.log('teste');
  }

}
