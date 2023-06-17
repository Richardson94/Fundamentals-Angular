import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css'],
})
export class UncommonPagesComponent {
  //i18nSelect
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

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'nothing is waiting',
    '=1': 'we have only one client waiting',
    '=2': 'we have two clients waiting',
    other: 'we have # clients waiting',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // keyValue Pipe
  public person = {
    name: 'Richard',
    age: 29,
    adress: 'El Alto, La Paz',
  };
}
