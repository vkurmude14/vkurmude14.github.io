import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Bread Omlette',
      'Spanish famous Omlette',
      'https://www.seriouseats.com/thmb/O2FORDMltV7aEd5JN02dF30I_Lc=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__02__20190122-souffle-omelet-vicky-wasik-15-5ed05b436c2c41668fe2c6cff4f783e0.jpg'
    ),
    new Recipe(
      'Pohe',
      'Pohe including Peanuts',
      'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Dadpe_Pohe_Recipe.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    console.log("Recipe selected");
    this.recipeWasSelected.emit(recipe);
  }
}
