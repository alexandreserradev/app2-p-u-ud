import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_API } from './app.api';
import { Pedido } from './shared/pedido.model';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) { }

  efetivarCompra(pedido: Pedido): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${URL_API}/pedidos`, pedido, { headers })
      .pipe(
        map((resp: any) => console.log(resp))
      );

  }
}
