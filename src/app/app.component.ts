import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queteOutput';

  public onomatopiaList : string[] = [];

  afficherOnomatopia(event: string): void {
    this.onomatopiaList.push(event); 
  }
}
