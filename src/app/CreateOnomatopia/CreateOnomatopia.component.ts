import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-CreateOnomatopia',
  templateUrl: './CreateOnomatopia.component.html',
  styleUrls: ['./CreateOnomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  newOnomatopia: string = "";

  constructor() { }

  ngOnInit() {
  }

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia)
  }

}
