import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-resume-helper',
  imports: [FormsModule],
  templateUrl: './resume-helper.component.html',
  styleUrl: './resume-helper.component.css'
})
export class ResumeHelperComponent {

  file: any = null;
  result: string = '';
  loading: boolean = false;

  private api = environment.apiUrl;
  apiUrl = `${this.api}/api/resume`;

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
      this.loading = false;
      alert("Please Input a Valid File");
    } else {
      console.log(this.file);
      const formData = new FormData();
      formData.append('file', this.file);
      this.http.post(`${this.apiUrl}/generate`, formData, {responseType: 'text'}).subscribe((result: any) => {
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
