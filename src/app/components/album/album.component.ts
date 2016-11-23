import { forEach } from '@angular/router/src/utils/collection';
import { Album } from '../../models/album';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];
  images: any[];

  constructor(
      private _spotifyService: SpotifyService,
      private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this._route.params.map(params => params['id'])
        .subscribe((id) => {
          this._spotifyService.getAlbum(id)
            .subscribe(album => {
              this.album = album;
              let images:any[] = [];
              album.images.forEach(image => {
                images.push({source: image.url, alt: 'Description', title: album.name});
              });
              this.images = images;
          });
        })
  }
}