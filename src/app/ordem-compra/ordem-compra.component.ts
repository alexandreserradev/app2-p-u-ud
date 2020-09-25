import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco = '';
  numero = '';
  complemento = '';
  formaPagamento = '';

  // controles de validacao dos campos
  enderecoValido: boolean;
  numeroValido: boolean;
  complementoValido: boolean;
  formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  atualizarEndereco(endereco: string): void {
    this.endereco = endereco;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

  }

  atualizarNumero(numero: string): void {
    this.numero = numero;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizarComplemento(complemento: string): void {
    this.complemento = complemento;

    if (this.complemento.length > 0) {
      this.numeroValido = true;
    }
  }

  atualizarFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }

}
