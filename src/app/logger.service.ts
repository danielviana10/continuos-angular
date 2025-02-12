import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messages: string[] = [];

  login(message: string){
    console.log(message);
    this.messages.push(message);
  }

  getMessages() {
    console.log(this.messages);
  }
}
