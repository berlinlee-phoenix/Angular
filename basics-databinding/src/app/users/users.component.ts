import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  username: string;
  isEmpty: boolean;

  constructor() {
    
  }

  ngOnInit(): void {
    this.username = '';
    this.isEmpty = true;
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;

    if (this.username === '') {
      this.isEmpty = true;
    } else if (this.username !== '') {
      this.isEmpty = false;
    }
  }

  onResetUsername() {
    this.username = '';
  }

}
