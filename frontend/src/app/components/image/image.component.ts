import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize-ssr';

@Component({
  selector: 'app-image',
  imports: [FormsModule, AutosizeModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  prompt: string = '';

  imgUrls: string [] = [];
  loading: boolean = false;

  http = inject(HttpClient);
  apiUrl = 'http://localhost:8080/api/image'

  onSubmit(){
    this.loading = true;
    this.imgUrls = [];
    this.http.get(`${this.apiUrl}/generate?prompt=${this.prompt}`).subscribe((result: any) => {
      if(result){
        this.imgUrls = result;
      } else {
        alert("An Unknown Error Has Occured")
      }
      this.loading = false;
      this.prompt = '';
    }, (error: any) => {
      this.loading = false;
      this.prompt = '';
      alert("An Unknown Error Has Occured, Please Try Again.");
    })
  }

}
