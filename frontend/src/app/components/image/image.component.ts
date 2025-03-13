import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';

@Component({
  selector: 'app-image',
  imports: [FormsModule, AutosizeModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  prompt: string = '';

  imgUrls: string [] = [];

  http = inject(HttpClient);
  apiUrl = 'http://localhost:8080/api/image'

  onSubmit(){
    console.log(`${this.apiUrl}/generate?prompt=${this.prompt}`);
    this.http.get(`${this.apiUrl}/generate?prompt=${this.prompt}`).subscribe((result: any) => {
      this.imgUrls = result;
    })
  }

}
