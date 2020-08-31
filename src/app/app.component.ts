import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta,private title: Title)
  {

  }

  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }
}
