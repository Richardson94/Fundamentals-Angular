import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesSerive } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  constructor(private countriesSerive: CountriesSerive) {}

  searchByRegion(term: string) {
    this.countriesSerive.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
