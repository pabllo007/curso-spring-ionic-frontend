import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome:['Lucas', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
        email: ['lucas@gmail.com.br', Validators.email],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['00753380684', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['123', [Validators.required]],
        logradouro: ['Conjunto N', [Validators.required]],
        numero: ['6', [Validators.required]],
        complemento: ['Cond. jardim Europa', []],
        bairro: ['Grande Colorado', []],
        cep: ['73105904', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        telefone1: ['981464558', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: [null, []],
        cidadeId: [null, []]
      });
  }

  signupUser() {
    console.log('envou os dados')
  }
}
