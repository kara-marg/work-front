import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage | undefined
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
  }

  set(key: string, value: string) {
    this.localStorage?.setItem(key, value);
  }

  get(key: string) {
    return this.localStorage?.getItem(key);
  }

  remove(key: string) {
    this.localStorage?.removeItem(key);
  }
}
