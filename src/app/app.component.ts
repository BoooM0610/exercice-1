import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-1';

  name!:string;

  fonts = ['Verdana', 'Fantasy', 'Arial', 'Impact'];

  font !: string;

  font_size:number = 20;

  font_align!: string;

  setName (event:Event) {
    this.name = ((<HTMLInputElement>event.target).value).toUpperCase();
  }

  setFont(event:Event) {
    this.font = (<HTMLInputElement>event.target).value;
    var element = document.getElementById('user_name');
    if (element) {
      element.style.fontFamily = this.font;
    }
  }

  setSize (event:Event) {
    this.font_size = parseInt((<HTMLInputElement>event.target).value);
  }

  setAlign(event:Event) {
    this.font_align = (<HTMLInputElement>event.target).value;
    var element = document.getElementById('user_name');
    if (element) {
      element.style.textAlign = this.font_align;
    }
  }
}
