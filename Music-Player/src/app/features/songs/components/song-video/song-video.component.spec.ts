import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVideoComponent } from './song-video.component';

describe('SongVideoComponent', () => {
  let component: SongVideoComponent;
  let fixture: ComponentFixture<SongVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
