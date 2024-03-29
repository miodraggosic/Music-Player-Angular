import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '@env';
import { Song } from '@models/interfaces/song.interface';
import { BehaviorSubject, Observable, Subject, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  private readonly songsUrl: string = `${environment.baseApiUrl}songs`;
  private readonly ytApi: string = `${environment.ytApi}`;

  ytApiLoaded: boolean = false;

  constructor(private http: HttpClient, private sanitazer: DomSanitizer) {}

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl).pipe(retry(2));
  }

  initYtApi() {
    if (!this.ytApiLoaded) {
      const tag = document.createElement('script');
      tag.src = this.ytApi;
      document.body.appendChild(tag);
      this.ytApiLoaded = true;
    }
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
