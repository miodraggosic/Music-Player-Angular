import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '@env';
import { Song } from '@models/interfaces/song.interface';
import { Observable, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private readonly songsUrl: string = `${environment.baseApiUrl}songs`;

  constructor(private http: HttpClient, private sanitazer: DomSanitizer) {}

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl).pipe(
      // map((data) => {
      //   data.map((song) => (song.videoUrl = this.sanitazeUrl(song.videoUrl)));
      //   console.log(data);
      //   return data;
      // }),
      retry(2)
    );
  }

  getById(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.songsUrl}/${id}`).pipe(retry(2));
  }

  getFiltered(term: string): Observable<Song[]> {
    return this.http
      .get<Song[]>(`${this.songsUrl}?name_like=${term}`)
      .pipe(retry(2));
  }

  delete(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.songsUrl}/${id}`).pipe(retry(2));
  }
  update(id: number, song: Song): Observable<Song> {
    return this.http.patch<Song>(`${this.songsUrl}/${id}`, song).pipe(retry(2));
  }

  add(song: Song): Observable<Song> {
    return this.http.post<Song>(`${this.songsUrl}`, song).pipe(retry(2));
  }

  private sanitazeUrl(url: string) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url) as string;
  }
}
