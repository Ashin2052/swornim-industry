import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {

  Songs: any = [];

  constructor(private songService: SongService,private meta: Meta,private title: Title) {
    this.songService.getSongs().subscribe((item) => {
      this.Songs = item;
    });

    this.meta.addTags([
      {name: 'description', content: 'This is swornim bung industry .It is Swonim bung industry located in kathmandu nepal.Sworinim pipe industry is Smoking pipe manufacturar.'},
      {name: 'author', content: 'Swornim mahat,saru mahat,ashin mahat'},
      {name: 'keywords', content: "Swornim pipe industry nepal,Swornim Factory Nepal,Swornim Pipe Industry,"+
                           "Swornim Mahat Industry Nepal kathmandu,Bung Industry in nepal,weed pipe factory nepal,Smoking pipe factory nepal,"+
                          "Weed pipe industry kathmandu nepal,Swornim pipe industry nepal"}
    ]);
    this.setTitle('Swornim pipe industry nepal.Swornim smoking pipe industry kathmandu');
  }

  ngOnInit() { }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  removeSong(employee, i) {
    if (window.confirm('Are you sure?')) {
      this.songService.deleteSong(employee._id)
        .subscribe((res) => {
          this.Songs.splice(i, 1);
        }
        )
    }
  }

}
