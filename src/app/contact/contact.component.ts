import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  fname: any;
  lname: any;
  phone: any;
  work: any;
  email: any;
  message: any;
  state: any = "";

  submit() {

    const email = 'deepikajeengar939@gmail.com'; // Replace with the recipient's email address
    const subject = 'New Contact Form Submission';
    const body = `Name: ${this.fname}\nPhone: ${this.phone}\nMessage: ${this.message}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
