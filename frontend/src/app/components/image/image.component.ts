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

  prompt: String = '';
  imgUrls: any[] = [];

  http = inject(HttpClient);
  apiUrl = 'http://localhost:8080/api/image'

  onSubmit(){
    console.log(prompt);
    console.log(`${this.apiUrl}/generate?prompt=${prompt}`);
    this.http.get(`${this.apiUrl}/generate?prompt=${prompt}`).subscribe((result: any) => {
      console.log(result);
      this.imgUrls = result;
      console.log(this.imgUrls);
    })
  }

}
