import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  fname: any;
  lname: any;
  phone: any;
  work: any;
  email: any;
  message: any;
  state: any = "";
  gender: any;
  dob: any;
  username: any;
  password: any;
  zip: any;
  address: any;
  city: any;
  contactMethod: any;
  contactTime: any;
  profilePic: any;
  favColor: any;
  satisfaction: any;
  interestSports: any;
  interestMusic: any;
  interestTech: any;
  interestArt: any;
  country: any;

  submit() {

    const email = 'deepikajeengar939@gmail.com'; // Replace with the recipient's email address
    const subject = 'New Contact Form Submission';
    const body = `Name: ${this.fname}\nPhone: ${this.phone}\nMessage: ${this.message}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
