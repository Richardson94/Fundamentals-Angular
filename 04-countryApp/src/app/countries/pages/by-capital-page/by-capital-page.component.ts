import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  searchBycapital(term: string) {
    console.log('From ByCapitalPage');
    console.log({ term });
  }
}
