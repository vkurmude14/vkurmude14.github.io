import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Orange',4)
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredient){
    console.log("Ingredient add initiated"+ingredient);
    this.ingredients.push(ingredient);
    console.log("Ingredient add success")
  }
}
