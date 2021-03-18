import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[] = [];
  
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); //need ` to eval var
  }
  
  getHeroes(): void {
    //this is synchronous and will not work in a real app. Works since local.
    //real app remote fetch is inherently asynchronous
    //this.heroes = this.heroService.getHeroes();

    //this is the async version
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    //fill heroes here not constructor so angular can call when appropriate after constructing
    this.getHeroes(); 
  }

}
