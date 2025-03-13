import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-helper',
  imports: [FormsModule],
  templateUrl: './resume-helper.component.html',
  styleUrl: './resume-helper.component.css'
})
export class ResumeHelperComponent {

  file: any = null;
  result: string = '';

  apiUrl = "http://localhost:8080/api/resume";

  http = inject(HttpClient);

  onFileChange(event: any){
    if(event.target.files.length > 0){
      this.file = event.target.files[0];
    }
  }

  onSubmit(){
    if(this.file == null){
      alert("Please Input a Valid File");
    } else {
      console.log(this.file);
      const formData = new FormData();
      formData.append('file', this.file);
      this.http.post(`${this.apiUrl}/generate`, formData, {responseType: 'text'}).subscribe((result: any) => {
        if(result){
          this.result = result;
        }
      })
    }
  }

}
