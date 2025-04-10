import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "header"

  @Output() select: EventEmitter<string> = new EventEmitter();

  constructor(){
    console.log("construtor called");
  }

  menuSwitch(pageValue: string) {
    this.select.emit(pageValue);
  }
}
