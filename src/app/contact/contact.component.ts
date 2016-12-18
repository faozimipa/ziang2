import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 powers = ['Super Danger', 'Danger', 'Flexible', 'Super Flexible'];

 model = new Contact(18, '',  this.powers[0], '');

 submitted = false;
 
 onSubmit() { this.submitted = true; }
 newContact() {
    this.model = new Contact(42, '', '');
  }          
  constructor(title:Title) { 
     title.setTitle('Send messages to me - ZiAng 2');
  }

  ngOnInit() {
    
  }

}
