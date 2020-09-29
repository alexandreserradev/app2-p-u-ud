import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from './shared/item-carrinho.model';

export class CarrinhoService {
  itens: ItemCarrinho[] = [];

  exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  incluirItem(oferta: Oferta): void {
    const itemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    // Verificar se o item já existe na lista
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }

  }

  totalCarrinhoCompras(): number {
    let total = 0;

    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade);
    });

    return total;
  }

  adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho);
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinho) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinho) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
      }
    }
  }

  limparCarrinho(): void {
    this.itens = [];
  }
}
