import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

  artistas: any[] = [];
  loading: boolean;
  respuesta: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino:string) {
    this.loading = true;
    this.respuesta = false;
    this.spotify.getArtista ( termino )
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
        if(this.artistas == '') {
           return this.respuesta = true;
      }
          }
      );
  }

}
