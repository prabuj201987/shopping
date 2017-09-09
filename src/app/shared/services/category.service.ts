import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  saveData(data) {
    this.db.list('/categories').push({name: data});
  }
  updateData(key, value) {
    this.db.object('/categories/' + key).update({'name': value});
  }
}
