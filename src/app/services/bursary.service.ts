import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Bursary } from '../models/Bursary';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BursaryService {
  bursariesCollection: AngularFirestoreCollection<Bursary>;
  bursaryDocument: AngularFirestoreDocument<Bursary>;
  bursaries: Observable<Bursary[]>;
  bursary: Observable<Bursary>;

  clientId: string;

  constructor(
    private afs: AngularFirestore
  ) {
    if (localStorage.getItem('clientId') != null) {
      this.clientId = localStorage.getItem('clientId');
      this.bursariesCollection = this.afs.collection('Bursaries', ref => ref.where('clientId', '==', this.clientId));
    }
  }

  getBursaries(): Observable<Bursary[]> {
    this.bursaries = this.bursariesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const bursaryData = action.payload.doc.data() as Bursary;
        bursaryData.bursaryId = action.payload.doc.id;
        return bursaryData;
      });
    }));
    return this.bursaries;
  }

  addBursary(newBursary: Bursary) {
    this.bursariesCollection.add(newBursary);
  }

}

