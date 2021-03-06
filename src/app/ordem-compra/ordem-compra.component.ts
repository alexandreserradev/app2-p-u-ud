import { ItemCarrinho } from './../shared/item-carrinho.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  idPedidoCompra: number;
  itensCarrinho: ItemCarrinho[] = [];

  formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    numero: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, Validators.required)
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log(this.itensCarrinho);


  }

  confirmarCompra(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();

    } else {
      if (this.carrinhoService.exibirItens().length === 0) {
        alert('Você não selecionou nenhum item');
      } else {

        const pedidoObj = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens()
        );

        this.ordemCompraService.efetivarCompra(pedidoObj)
          .subscribe((pedido: Pedido) => {
            this.idPedidoCompra = pedido.id;
            this.carrinhoService.limparCarrinho();
          });
      }

    }

  }

  adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
  }
}
