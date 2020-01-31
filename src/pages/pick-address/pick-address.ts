import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [{
      id: "1",
      logradouro : "Condominio Jardim Europa 2",
      numero : "6",
      complemento : "DF-150",
      bairro : "Grande Colorado",
      cep : "73105904",
      cidade : {
        id : "1",
        nome: "Brasilia",
        estado: {
          id : "1",
          nome: "Distrito Federal"
        }
      }
    },
    {
      id: "2",
      logradouro : "Rua Jose Raimundo da Silva",
      numero : "141",
      complemento : "",
      bairro : "Vila",
      cep : "7000000",
      cidade : {
        id : "1",
        nome: "Guaratingueta",
        estado: {
          id : "2",
          nome: "Sao Paulo"
      
        }  
      }
    }
  ]
  }

}
