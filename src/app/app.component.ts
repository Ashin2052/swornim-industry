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

    this.meta.addTags([
      {name: 'description', content: 'Swornim bung industry'},
      {name: 'author', content: 'Swornim bung industy'},
      {name: 'keywords', content: 'Sworniim,Bung,Industry,Swornim Factory,Saru Pipe Industry,Swornim pipe industry,Swornim Mahat Industry'}
    ]);
    this.setTitle('Sworni industry Page');
  }

  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }
}
