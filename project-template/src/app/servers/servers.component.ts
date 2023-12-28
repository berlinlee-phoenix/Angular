import { Component, OnInit} from '@angular/core';

@Component({
  // Component selector
  selector: 'app-servers',

  // Attribute selector
  //selector: '[app-servers]',

  // Class selector
  //selector: '.app-servers',

  // Either template: ''
  // OR templateUrl: '' 
  // is required
  //templateUrl: './servers.component.html',

  // Defining html code in *.component.ts
  template: `
  <app-server></app-server>
  <div className="container">
    <h2>
      <strong>Testing inline HTML</strong>
    </h2>
  </div>
  <app-server><app-server>
  `,
  styleUrl: './servers.component.scss'
})
export class ServersComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {

  }
}
