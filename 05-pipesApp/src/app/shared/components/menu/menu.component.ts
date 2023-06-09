import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            routerLink: 'basics',
          },
          { label: 'Numbers', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'Uncommon', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [{ label: 'another element', items: [{ label: 'other' }] }],
      },
    ];
  }
}
