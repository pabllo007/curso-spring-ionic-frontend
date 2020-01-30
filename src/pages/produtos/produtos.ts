import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDTO[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('produtosssss');
    this.items = [
      {
        id: "1",
        nome: "Mouse",
        preco: 80.90
      },
      {
        id: "2",
        nome: "Teclado",
        preco: 100.00
      }
    ]
    console.log('item:' + this.items)
  }

}
