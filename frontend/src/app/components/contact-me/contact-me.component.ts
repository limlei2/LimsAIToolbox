import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize-ssr';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, AutosizeModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  contactObj: any = {
    name: '',
    email: '',
    contactContent: ''
  }

  onSubmit(){
    alert("Thanks for reaching out! Your comments and ideas will be read and taken seriously");
    this.contactObj.name = '';
    this.contactObj.email = '';
    this.contactObj.contactContent = '';
  }

}
