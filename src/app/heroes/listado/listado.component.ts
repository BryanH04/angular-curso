import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroeBorrado:string='';  
  heroes : string[] = ['Arturia Pendragon','Medusa','Gareth','Morgan Le Fay', 'Arcueid'];
  borrarHeroe(){
    this.heroeBorrado= this.heroes.pop()||'';
    console.log(this.heroeBorrado);
  }
}
