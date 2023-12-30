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
  templateUrl: './servers.component.html',

  // Defining html code in *.component.ts
  // template: `
  // <app-server></app-server>
  // <div className="container">
  //   <h2>
  //     <strong>Testing inline HTML</strong>
  //   </h2>
  // </div>
  // <app-server><app-server>
  // `,
  styleUrl: './servers.component.scss'
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'TestServer';

  constructor() {
    // After 2 seconds, allowNewServer = true
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
      
  }

  onCreateServer() {
    this.serverCreationStatus = `Server has been created!\nName is: ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    console.log(`event.target.value: ${event.target.value}`);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

