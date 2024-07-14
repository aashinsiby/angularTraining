import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

name ='Aashin';
nameDisplay(){
  alert('My name is'+ this.name);
  console.log('My name is'+ this.name);
}
}
