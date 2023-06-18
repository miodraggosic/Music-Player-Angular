import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Song } from '@models/interfaces/song.interface';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit {
  @Output() formValue = new EventEmitter<Song>();
  @Input() setValue$?: Observable<Song> | null;

  songForm!: FormGroup;

  private validators = {
    name: [Validators.required, Validators.pattern(/^[A-Z]+[\s\w\d]{0,39}$/)],
    url: [
      Validators.required,
      Validators.pattern(
        /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/
      ),
    ],
    duration: [Validators.required],
    description: [Validators.required],
    author: [Validators.required, Validators.pattern(/^[A-Z]+[\sA-z]+$/)],
    date: [Validators.required],
  };

  ngOnInit(): void {
    this.createForm();
    this.updateForm();
  }

  onSubmit(): void {
    const formValue = this.formatDuration();

    this.formValue.emit(formValue);
    this.songForm.reset();
  }

  private createForm(): void {
    this.songForm = new FormGroup({
      name: new FormControl('', this.validators.name),
      videoUrl: new FormControl('', this.validators.url),
      description: new FormControl('', this.validators.description),
      duration: new FormGroup({
        minutes: new FormControl('', this.validators.duration),
        seconds: new FormControl('', this.validators.duration),
      }),
      author: new FormGroup({
        firstName: new FormControl('', this.validators.author),
        lastName: new FormControl('', this.validators.author),
      }),
      datePublished: new FormControl(
        new Date().toISOString(),
        this.validators.date
      ),
    });
  }

  private updateForm(): void {
    this.setValue$?.pipe(take(1)).subscribe((data) => {
      this.songForm.patchValue({
        ...data,
        duration: {
          minutes: data.duration.split(':')[0],
          seconds: data.duration.split(':')[1],
        },
      });
    });
  }

  get minutes() {
    return this.songForm.get('duration')?.get('minutes')?.value;
  }
  get seconds() {
    return this.songForm.get('duration')?.get('seconds')?.value;
  }

  private formatDuration(): Song {
    const song = this.songForm.value;
    song.duration = `${this.minutes}:${this.seconds}`;
    return song;
  }
}
