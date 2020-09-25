import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
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

  // Estados primitivo dos campos
  enderecoEstadoPrimitivo = true;
  numeroEstadoPrimitivo = true;
  complementoEstadoPrimitivo = true;
  formaPagamentoEstadoPrimitivo = true;

  // Controlar botão confirmar compra
  formEstado = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
    this.ordemCompraService.efetivarCompra();
  }

  atualizarEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();

  }

  atualizarNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  atualizarComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }

    this.habilitaForm();
  }

  atualizarFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  habilitaForm(): void {
    if (
      this.enderecoValido &&
      this.numeroValido &&
      this.formaPagamentoValido
    ) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

}
