import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    searchBoxComponent,
    CardListComponent,
    GifCardComponent,
  ],
  exports: [HomePageComponent, searchBoxComponent],
  imports: [CommonModule, SharedModule],
})
export class GifsModule {}
