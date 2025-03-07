import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-page',
  imports: [FormsModule],
  templateUrl: './email-page.component.html',
  styleUrl: './email-page.component.css'
})
export class EmailPageComponent {

  apiUrl: string = "http://localhost:8080/api/email";

  response: String = '';

  emailObj: any = {
    emailContent: '',
    tone: ''
  }

  http = inject(HttpClient);
  
  onSubmit(){
    console.log(this.emailObj);
    this.http.post(`${this.apiUrl}/generate`, this.emailObj, {responseType: 'text'}).subscribe((result: any) => {
      if(result){
        alert("Message Generated Successfully")
        this.response = result;
        console.log(result);
      } else {
        console.log(result);
      }
    })
  }

}
