import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new Subject<any>(); // messageSubject is a publisher

  sendMessage(message: string) {
    this.messageSubject.next({ text: message }); // publish a new data
  }

  clearMessages() {
    this.messageSubject.next(null); // publish null data
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable(); // converts subject to observable
  }
}
