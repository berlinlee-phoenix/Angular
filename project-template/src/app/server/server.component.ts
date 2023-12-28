// A component = A typescript class
import { Component } from "@angular/core";

// Will be stored as metadata for this class
// to be inserted to index.html
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html' //server.component.html
})
export class ServerComponent {

}