import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  chat: any = {
    question: ''
  }
  
  apiUrl: string = "http://localhost:8080/api/chat";

  response: string = '';

  http = inject(HttpClient);

  onSubmit(){
    this.http.post(`${this.apiUrl}/generate`, this.chat, {responseType: 'text'}).subscribe((result: any) => {
      if(result){
        console.log(this.chat);
        this.response = result;
      }
    })
  }
  

}
