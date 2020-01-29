import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstadoService } from '../../services/domain/estado.service.';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public estadoService: EstadoService,
    public cidadeService: CidadeService) {

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
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
  }

  ionViewDidLoad() {
    this.estadoService.findAll()
    .subscribe(response => {
      this.estados = response;
      this.formGroup.controls.estadoId.setValue(this.estados[0].id);
      this.updateCidades();
    }, 
    error =>{})
  }

  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
    .subscribe(response => {
      this.cidades = response;
      this.formGroup.controls.cidadeId.setValue(null);
    }, 
    error =>{})
  }

  signupUser() {
    console.log('enviou os dados')
  }
}
