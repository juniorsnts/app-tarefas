import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas: any = [];

  constructor(private storageProvider: StorageProvider,
    private modalCtrl: ModalController,
    public navCtrl: NavController) {
    this.storageProvider.getItem('tarefas').then(tarefas => {
      if (tarefas) {
        this.tarefas = tarefas;
      }
    })
  }

  abrirModal = () => {
    let modal = this.modalCtrl.create('CriarTarefaPage');
    modal.present();
    modal.onDidDismiss((data: any) => {
      if (data) {
        this.tarefas.push(data);
        this.storageProvider.setItem('tarefas', this.tarefas);
      }
    })
  }

  deletar(tarefa) {
    this.tarefas = this.tarefas.filter((t) => t !== tarefa);
    this.storageProvider.setItem('tarefas', this.tarefas);
  }
}
