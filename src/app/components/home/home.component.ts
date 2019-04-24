import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe ( (data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorS )=>{
      this.error = true;
      this.loading = false;
      console.log(errorS);
      this.mensajeError = errorS.error.error.message;
    });

}
}
