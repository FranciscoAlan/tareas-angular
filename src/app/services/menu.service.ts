import { Injectable } from '@angular/core';
import servicioMenu from 'src/assets/jsons/menu.json';
import { Menu } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Menu[] {
    if (servicioMenu && servicioMenu.menu) {
      return servicioMenu.menu as any[];
    } else {
      return [];
    }
  }
}
