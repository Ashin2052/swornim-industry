import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})

export class AddSongComponent implements OnInit {
  songForm: FormGroup;

  constructor(
    private songService: SongService,
    public fb: FormBuilder,
    private meta: Meta,private title: Title
  ) {
    this.form()

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
  ngOnInit() { }

  form() {
    this.songForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  submit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.songService.addSong(this.songForm.value)
        .subscribe((res) => {
          console.log(res)
          this.songForm.reset();
        })
    }
  }

}
