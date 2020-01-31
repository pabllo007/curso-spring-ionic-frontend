import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from '../../models/cart.item';
import { CartService } from '../../services/domain/cart.service';
import { ProdutoService } from '../../services/domain/produto.service';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoDTO } from '../../models/produto.dto';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: CartItem[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public catService: CartService,
    public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    let carItem = this.catService.getCart();
    this.items = carItem.items;
    this.loadImagesUrls();
  }

  loadImagesUrls() {
    for (var i=0; i < this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.getSmallImageFromBucket(item.produto.id)
      .subscribe(response => {
        item.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.produto.id}-small.jpg`;
      },
      error =>{});
    }
  }

  removeItem(produto: ProdutoDTO) {
    this.items = this.catService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO) {
    this.items = this.catService.increaseQuantity(produto).items;
  }

  decreaseQuantity(produto: ProdutoDTO) {
    this.items = this.catService.decreaseQuantity(produto).items;
  }

  total() : number {
    return this.catService.total();
  }

  goOn() {
    this.navCtrl.setRoot('CategoriasPage');
  }

  checkout () {
    this.navCtrl.push('PickAddressPage')
  }
}
