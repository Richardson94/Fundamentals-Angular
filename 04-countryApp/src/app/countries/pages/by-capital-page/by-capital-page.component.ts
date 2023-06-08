import { Component } from '@angular/core';
import { CountriesSerive } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  constructor(private countriesSerive: CountriesSerive) {}

  searchBycapital(term: string) {
    this.countriesSerive.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
