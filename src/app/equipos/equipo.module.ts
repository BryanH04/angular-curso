import { NgModule } from "@angular/core";
import { equiposComponent } from "./equipo/equipo.component";
import { listadoEquipoComponent } from "./listadoEquipos/listadoEquipos.component";
@NgModule({
    declarations:[
        equiposComponent,
        listadoEquipoComponent
    ],
    exports:[
        equiposComponent,
        listadoEquipoComponent
    ],
    imports:[

    ]
})
export class EquiposModule{}
