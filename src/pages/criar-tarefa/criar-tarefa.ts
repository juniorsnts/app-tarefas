import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-criar-tarefa',
  templateUrl: 'criar-tarefa.html',
})
export class CriarTarefaPage {

  nome_tarefa = '';
  descricao_tarefa = '';

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  criarTarefa = () => {
    this.viewCtrl.dismiss({ nome: this.nome_tarefa, descricao: this.descricao_tarefa });
  }

  cancelar = () => {
    this.viewCtrl.dismiss();
  }

}
