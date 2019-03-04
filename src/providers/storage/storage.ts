import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(private nativeStorage: Storage) { }

  setItem(reference, data) {
    return this.nativeStorage.set(reference, data);
  }

  getItem(reference) {
    return this.nativeStorage.get(reference);
  }
}
