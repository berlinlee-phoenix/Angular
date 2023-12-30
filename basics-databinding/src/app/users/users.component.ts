import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  username: string = '';
  isEmpty: boolean = true;

  constructor() {
    if (this.username != '') {
      this.username
    }
  }

  ngOnInit(): void {
      
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

}
