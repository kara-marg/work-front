import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private newItemCreate: boolean = false;
  private itemName: string | null = null;
  constructor() {

  }

  setNetItemConfig(item: string | null){
    console.log(item)

    if (item) {
      console.log(item)
      this.newItemCreate = true
      this.itemName = item
    } else {
      this.newItemCreate = false
      this.itemName = null
    }
  }


}
