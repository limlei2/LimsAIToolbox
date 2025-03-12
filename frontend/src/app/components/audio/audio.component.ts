import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-audio',
  imports: [FormsModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css'
})
export class AudioComponent {

  file: any = null;

  apiUrl: string = "http://localhost:8080/api/audio";

  result: string = '';

  http = inject(HttpClient);

  onFileChange(event: any){
    console.log(this.file);
    if(event.target.files.length > 0){
      this.file = event.target.files[0];
    }
  }

  onSubmit(){
    if(this.file == null){
      alert("Please Input a Valid File");
    } else {
      const formData = new FormData();
      formData.append('file', this.file);
      this.http.post(this.apiUrl, formData, {responseType: 'text'}).subscribe((result: any) => {
        if(result){
          this.result = result;
        }
      })
    }
    
  }

}
