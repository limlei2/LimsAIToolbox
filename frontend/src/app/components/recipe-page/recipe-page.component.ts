import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize-ssr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recipe-page',
  imports: [FormsModule, AutosizeModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {

  http = inject(HttpClient);

  private api = environment.apiUrl;
  apiUrl: string = `${this.api}/api/recipe`;
  loading: boolean = false;

  recipeObj: any = {
    ingredients: '',
    time: '',
    difficulty: ''
  }

  response: string = '';

  part1: string = '';
  part2: string = '';

  onSubmit(){
    this.loading = true;
    this.http.post(`${this.apiUrl}/generate`, this.recipeObj, {responseType: 'text'}).subscribe((result: any) => {
      if(result){
        const splitted = result.split('Part 2:');
        this.part1 = splitted[0].split('Part 1:')[1];
        this.part2 = splitted[1];
      } else {
        alert("An Unknown Error Has Occured");
      }
      this.loading = false;
      this.recipeObj.ingredients = '';
      this.recipeObj.time = '';
      this.recipeObj.difficulty = '';
    }, (error: any) => {
      this.loading = false;
      this.recipeObj.ingredients = '';
      this.recipeObj.time = '';
      this.recipeObj.difficulty = '';
      alert("An Unknown Error Has Occured, Please Try Again.");
    })
    
  }

}
