import { Hero } from './../Hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
	constructor(private heroService: HeroService) {}
	heroes: Hero[];

	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
	}
	ngOnInit() {
		this.getHeroes();
	}
}
