import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
      console.log('Servicio spoti listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDrBqBX9urrE5zhuWKvjA6yDq969iCaQ1fP1bL63Fm9azkbtwZxCBAn26C3LQIGvOs-4xLrClehPzX-gTU'
    });

    return this.http.get(url, { headers });
  }

 getNewReleases() {

   return this.getQuery('browse/new-releases?limit=20')
   .pipe( map ( data => data['albums'].items));
  }

 getArtista(termino:string){

    return this.getQuery('search?q=' + termino + '&type=artist&market=AR&offset=0&limit=15')
      .pipe( map ( data => data['artists'].items));
 }

}
