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

    this.meta.updateTag(
      {name: 'author', content: 'Swornim mahat,saru mahat,ashin mahat'},

    );
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
