import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute, //interested in route params in URL
    private heroService: HeroService, //gets data 
    private location: Location //nav back later
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //js + operator converts string to number
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void { 
    this.location.back();
  }
}
