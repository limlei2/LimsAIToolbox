import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-page',
  imports: [FormsModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {

  http = inject(HttpClient);

  apiUrl: string = "http://localhost:8080/api/recipe";

  recipeObj: any = {
    ingredients: '',
    time: '',
    difficulty: ''
  }

  response: string = '';

  part1: string = '';
  part2: string = '';

  onSubmit(){
    this.http.post(`${this.apiUrl}/generate`, this.recipeObj, {responseType: 'text'}).subscribe((result: any) => {
      if(result){
        alert("Recipe Generated Successfully")
        const splitted = result.split('Part 2:');
        this.part1 = splitted[0].split('Part 1:')[1];
        this.part2 = splitted[1];

      } else {
        console.log(result);
      }
    })
  }

}
