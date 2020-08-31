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
      {name: 'description', content: 'This is swornim bung industry .It is Swonim bung industry located in kathmandu nepal.Sworinim pipe industry is Smoking pipe manufacturar.'},
      {name: 'author', content: 'Swornim mahat,saru mahat,ashin mahat'},
      {name: 'keywords', content: "Swornim pipe industry nepal,Swornim Factory Nepal,Swornim Pipe Industry,"+
                           "Swornim Mahat Industry Nepal kathmandu,Bung Industry in nepal,weed pipe factory nepal,Smoking pipe factory nepal,"+
                          "Weed pipe industry kathmandu nepal,Swornim pipe industry nepal"}
    ]);
    this.setTitle('Swornim pipe industry nepal.Swornim smoking pipe industry kathmandu');
  }

  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }
}
