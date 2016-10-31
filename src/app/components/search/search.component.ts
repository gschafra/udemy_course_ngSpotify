import { Artist } from './../../models/artist';
import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchResult: Artist[];

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchMusic() {
    if (this.searchStr) {
      this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
        this.searchResult = res.artists.items;
      });
    } else {
      this.searchResult = [];
    }
  }

}
