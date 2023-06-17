import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css'],
})
export class UncommonPagesComponent {
  //i18n Select
  public name: string = 'Richardson';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'mr',
    female: 'mrs',
  };

  changeClient(): void {
    if (this.name === 'Richardson') {
      this.name = 'Fernanda';
      this.gender = 'female';
    } else {
      this.name = 'Richardson';
      this.gender = 'male';
    }
  }
}
