import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesSerive } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countriesSerive: CountriesSerive) {}

  searchByCountry(term: string) {
    this.countriesSerive.serachCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
