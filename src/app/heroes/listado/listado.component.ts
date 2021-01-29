import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})

export class ListadoComponent  {

 heroes: string[]= ['Spiderman', 'Batman', 'Superman'];
 heroeBorrado: string = '';

 borrarHeroe(){
   //this.heroes.pop();
       
    this.heroeBorrado = this.heroes.shift() || '';
  }


}
