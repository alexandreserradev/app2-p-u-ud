import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {  }

  async getOfertas(): Promise<Oferta[]> {
    const resposta = await this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true')
      .toPromise();
    return resposta;
  }

  async getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    const resposta = await this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise();
    return resposta;
  }
}
