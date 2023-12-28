import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// This import feature is offered by TypeScript != Angular
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// If you do NOT register components in @NgModule
// Angular won't recognize it by default
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
