import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootService {

  constructor() { }

  setBootScreenFinished(value: boolean): void {
    sessionStorage.setItem('bootScreenFinished', value.toString());
  }

  getBootScreenFinished(): boolean {
    return sessionStorage.getItem('bootScreenFinished') ? sessionStorage.getItem('bootScreenFinished') === 'true' : false;
  }

  setStartScreenFinished(value: boolean): void {
    sessionStorage.setItem('startScreenFinished', value.toString());
  }

  getStartScreenFinished(): boolean {
    return sessionStorage.getItem('startScreenFinished') ? sessionStorage.getItem('startScreenFinished') === 'true' : false;
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
