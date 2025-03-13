import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-helper',
  imports: [FormsModule],
  templateUrl: './resume-helper.component.html',
  styleUrl: './resume-helper.component.css'
})
export class ResumeHelperComponent {

  file: any = null;

  apiUrl = "http://localhost:8080/api/resume";

  onFileChange(event: any){

  }

  onSubmit(){

  }

}
