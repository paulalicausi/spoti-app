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
      'Authorization': 'Bearer BQAHH2ZY_57w6qdEq7pR5ggTWNJFyPfUBtKVSIxy4gV4vjpHu00pbGYbRHQ0BGXa1XkkS0sgDiF6Na8ILTk'
    });

    return this.http.get(url, { headers });
  }

 getNewReleases() {

   return this.getQuery('browse/new-releases?limit=20')
   .pipe( map ( data => data['albums'].items));
  }

 getArtistas(termino:string){

    return this.getQuery('search?q=' + termino + '&type=artist&market=AR&offset=0&limit=15')
      .pipe( map ( data => data['artists'].items));
 }

 getArtista(id:string){

    return this.getQuery(`artists/${id}`);
 }

 getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map ( data => data['tracks']));

 }

}
