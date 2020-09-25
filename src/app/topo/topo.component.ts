import { Observable, Subject, of } from 'rxjs';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termoDaBusca: string) => {
          console.log('Req. HTTP');

          if (termoDaBusca.trim() === '') {
            return of<Oferta[]>([]);
          }

          return this.ofertasService.pesquisaOfertas(termoDaBusca);
        }),
        catchError((err: any) => {
          console.log(err);
          return new Observable<Oferta[]>();
        })

      );
  }

  pesquisa(termoDaPesquisa: string): void {
    console.log('Keyup: ' + termoDaPesquisa);
    this.subjectPesquisa.next(termoDaPesquisa);

    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log(erro),
    //   () => console.log('Fluxo de eventos completo.')
    // );
  }

  limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
