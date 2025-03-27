import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize-ssr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-email-page',
  imports: [FormsModule, AutosizeModule],
  templateUrl: './email-page.component.html',
  styleUrl: './email-page.component.css'
})
export class EmailPageComponent {

  private api = environment.apiUrl;
  apiUrl: string = `${this.api}/api/email`;

  response: String = '';
  loading: boolean = false;

  emailObj: any = {
    emailContent: '',
    tone: ''
  }

  http = inject(HttpClient);
  
  onSubmit(){
    this.response = '';
    this.loading = true;
    this.http.post(`${this.apiUrl}/generate`, this.emailObj, {responseType: 'text'}).subscribe((result: any) => {
      if(result){
        this.response = result;
      } else {
        alert("An Unknown Error Has Occured");
      }
      this.loading = false;
      this.emailObj.emailContent = '';
      this.emailObj.tone = '';
    }, (error: any) => {
      this.loading = false;
      this.emailObj.emailContent = '';
      this.emailObj.tone = '';
      alert("An Unknown Error Has Occured, Please Try Again.");
    })
  }

}