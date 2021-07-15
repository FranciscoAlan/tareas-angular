import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menu: Menu[] = [];
  constructor(
    public menuService: MenuService
  ) {
    this.menu = menuService.getMenu();
  }

  ngOnInit(): void {
  }

}
