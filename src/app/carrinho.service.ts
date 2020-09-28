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


    console.log('IncluirItem() ', itemCarrinho);

  }
}

// export default CarrinhoService;
