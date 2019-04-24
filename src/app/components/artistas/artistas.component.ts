import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styles: []
})
export class ArtistasComponent {

  artista: any = {};
  topTracks: any [] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

  this.router.params.subscribe( params => {
    this.getArtista(params['id']);
    this.getTopTracks(params['id']);

  });
}

getArtista(id:string) {
  this.loading = true;
  this.spotify.getArtista(id)
      .subscribe(artista =>{
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
}

getTopTracks(id:string) {
  this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
}

}
