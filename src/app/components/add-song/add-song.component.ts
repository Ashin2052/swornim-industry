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
      {name: 'description', content: 'This is swornim bung industry .It is Swonim bung industry located in kathmandu nepal.Sworinim pipe industry is Smoking pipe manufacturar.'},
      {name: 'author', content: "Swornim pipe industry nepal,Swornim Factory Nepal,Swornim Pipe Industry,"+
      "Swornim Mahat Industry Nepal kathmandu,Bung Industry in nepal,weed pipe factory nepal,Smoking pipe factory nepal,"+
     "Weed pipe industry kathmandu nepal,Swornim pipe industry nepal,nepal craft shop,nepal smoking pipe,nepal handicraft,handicraft nepal"},
      {name: 'keywords', content: "Swornim pipe industry nepal,Swornim Factory Nepal,Swornim Pipe Industry,"+
                           "Swornim Mahat Industry Nepal kathmandu,Bung Industry in nepal,weed pipe factory nepal,Smoking pipe factory nepal,"+
                          "Weed pipe industry kathmandu nepal,Swornim pipe industry nepal,nepal craft shop,nepal smoking pipe,nepal handicraft,handicraft nepal"},
       {name:'google-site-verification', content:"nJmpxDdin1_k1GKfwTWkbUgarLMCb_zAAczgi0mKHjg"}

    ]);
    this.setTitle('Swornim pipe industry nepal.Swornim smoking pipe industry kathmandu');
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
