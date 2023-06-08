import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Song } from '@models/interfaces/song.interface';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private readonly songsUrl: string = `${environment.baseApiUrl}songs`;

  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl).pipe(retry(2));
  }
}
