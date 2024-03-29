import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent  {
  heroes: Heroe[] = [];
  constructor( private _heroesService: HeroesService) { }

ngOnInit(){
  this.heroes = this._heroesService.getHeroes();
  console.log(this.heroes);
}
}