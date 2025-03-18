import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize-ssr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule, AutosizeModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  chat: any = {
    question: ''
  }

  loading: boolean = false;
  
  private api = environment.apiUrl;
  apiUrl: string = `${this.api}/api/chat`;

  response: string = '';

  http = inject(HttpClient);

  onSubmit(){
    this.loading = true;
    this.response = '';
    this.http.post(`${this.apiUrl}/generate`, this.chat, {responseType: 'text'}).subscribe((result: any) => {
      if(result){
        this.response = result;
      } else {
        alert("An Unknown Error Has Occured");
      }
      this.loading = false;
      this.chat.question = '';
    }, (error: any) => {
      this.loading = false;
      this.chat.question = '';
      alert("An Unknown Error Has Occured, Please Try Again.");
    })
  }
  

}
