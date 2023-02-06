import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public message = '';

  constructor() { }

  public addMessage(message: string): void {
    this.message = message;

    setTimeout(() => { this.clear() }, 3000);
  }

  public clear(): void {
    this.message = '';
  }
}
