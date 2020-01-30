import { Injectable } from "@angular/core";
import { StorageService } from "../storage.service";
import { Cart } from "../../models/cart";
import { ProdutoDTO } from "../../models/produto.dto";

@Injectable()
export class CartService {

    constructor(public storage: StorageService) {}

    cleateOrClearCart() : Cart {
        let cart: Cart = {items: []};
        this.storage.setCart(cart);
        return cart;
    }

    getCart() {
        let cart: Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.cleateOrClearCart()
        }
        return cart;
    }

    addProduto(produto: ProdutoDTO) : Cart {
        console.log('produto-service')
        console.log(produto)
        let cart = this.getCart();
        console.log('cart')
        console.log(cart)
        let position = cart.items.findIndex(x => {
            console.log(x);
            if(x.produto.id == produto.id) {
                console.log('oko');
            }
        });
        if (position == -1) {
            cart.items.push({quantidade: 1, produto: produto})
        }
        this.storage.setCart(cart);
        return cart;
    }
}