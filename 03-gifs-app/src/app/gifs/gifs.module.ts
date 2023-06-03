import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';

@NgModule({
  declarations: [HomePageComponent, searchBoxComponent, CardListComponent, GifCardComponent],
  exports: [HomePageComponent, searchBoxComponent],
  imports: [CommonModule],
})
export class GifsModule {}
