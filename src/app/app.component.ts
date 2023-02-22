import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queteOutput';

  onomatopia : string = ""

  afficherOnomatopia(event: string): void {
    this.onomatopia = event; 
  }
}
