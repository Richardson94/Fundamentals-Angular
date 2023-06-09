import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css'],
})
export class BasicsPagesComponent {
  public nameLower: string = 'richardson';
  public nameUpper: string = 'RICHARDSON';
  public fullName: string = 'nELSon riCHARD';

  public customDate: Date = new Date();
}
