import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-audio',
  imports: [FormsModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css'
})
export class AudioComponent {
  

  file: any = null;
  loading: boolean = false;

  private api = environment.apiUrl;
  apiUrl: string = `${this.api}/api/audio`;

  result: string = '';

  http = inject(HttpClient);

  onFileChange(event: any){
    if(event.target.files.length > 0){
      this.file = event.target.files[0];
    }
  }

  onSubmit(){
    this.result = '';
    this.loading = true;
    if(this.file == null){
      alert("Please Input a Valid File");
      this.loading = false;
    } else {
      const formData = new FormData();
      formData.append('file', this.file);
      this.http.post(this.apiUrl, formData, {responseType: 'text'}).subscribe((result: any) => {
        if(result){
          this.result = result;
        } else {
          alert("An Unknown Error Has Occured");
        }
        this.loading = false;
        this.file = null;
      }, (error: any) => {
        this.loading = false;
        this.file = null;
        alert("An Unknown Error Has Occured, Please Try Again.");
      })
    }
  }
}
