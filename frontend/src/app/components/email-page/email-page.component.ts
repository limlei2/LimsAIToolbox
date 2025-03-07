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

  apiUrl: string = "https://localhost:8080/api/email";

  emailObj: any = {
    emailContent: '',
    tone: ''
  }

  http = inject(HttpClient);
  
  onSubmit(){
    console.log(this.emailObj);
    this.http.post(`${this.apiUrl}/generate`, this.emailObj).subscribe((result: any) => {
      if(result){
        alert("Message Generated Successfully")
        console.log(result);
      } else {
        console.log(result);
      }
    })
  }

}
