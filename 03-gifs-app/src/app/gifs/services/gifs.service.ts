import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apikey: string = '5Qhtf8d12qYKPrYI1WK6NlmaWVTfG9JZ';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get(`${this.serviceUrl}/search`, { params: params })
      .subscribe((resp) => {
        console.log(resp);
      });

    //   fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=${tag}&limit=10`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }
}
