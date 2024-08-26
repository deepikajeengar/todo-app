import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name : any;
  phone : any;
  message : any;

  submit() {
    console.log (this.name)
    console.log(this.phone)
    console.log(this.message)

    const email = 'deepikajeengar939@gmail.com'; // Replace with the recipient's email address
    const subject = 'New Contact Form Submission';
    const body = `Name: ${this.name}\nPhone: ${this.phone}\nMessage: ${this.message}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  } 

}
