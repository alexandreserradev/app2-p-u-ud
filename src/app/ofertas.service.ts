import { URL_API } from './app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

  private url_api = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) {}

  async getOfertas(): Promise<Oferta[]> {
    const resposta = await this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
      .toPromise();
    return resposta;
  }

  async getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    const resposta = await this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise();
    return resposta;
  }

  async getOfertaPorId(id: number): Promise<Oferta> {
    const resposta = await this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resp: any) => {
        return resp[0];
      });
    return resposta;
  }

  async getComoUsarOfertaPorId(id: number): Promise<string> {
    const resposta = await this.http.get<string>(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resp: any) => {
        return resp[0].descricao;
      });

    return resposta;
  }

  async getOndeFicaOfertaPorId(id: number): Promise<string> {
    const resposta = await this.http.get<string>(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resp: any) => {
        return resp[0].descricao;
      });

    return resposta;
  }
}
