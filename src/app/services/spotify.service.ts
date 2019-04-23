import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
      console.log('Servicio spoti listo');
  }

 getNewReleases() {

   const headers = new HttpHeaders ({
     'Authorization': 'Bearer BQB_9HnX_Q7ne3zL6xTmXiVCiZnasSl3prMuvBuuqlqbhAyRjJIruGJ5zkBoJQtGtePGut0d4uTBZwzsw9Q'
   });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
 }
}
