import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private path = '../../../assets/data/genres.json'
  //
  private genre: BehaviorSubject<any>;
  private genreActive: BehaviorSubject<number>;
  //
  private subgenres: BehaviorSubject<Array<object>>;
  private subgenreActive: BehaviorSubject<Array<number>>;
  //
  private newSubgenreActive: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.genre = new BehaviorSubject<any>({});
    this.subgenres = new BehaviorSubject<Array<object>>([{}]);
    this.genreActive = new BehaviorSubject<number>(-1);
    this.subgenreActive = new BehaviorSubject<Array<number>>([]);
    this.newSubgenreActive = new BehaviorSubject<boolean>(false);
  }

  getAll() {
    return this.http.get(this.path);
  }

  setGenre(name: string) {
    return this.genre.next(name);
  }
  getGenre(): Observable<string> {
    return this.genre.asObservable()
  }


  setSubgenres(subgenre: Array<object>) {
    return this.subgenres.next(subgenre);
  }
  getSubgenres(): Observable<Array<object>> {
    return this.subgenres.asObservable();
  }


  setGenreActive(active: number) {
    return this.genreActive.next(active);
  }
  getGenreActive(): Observable<number> {
    return this.genreActive.asObservable();
  }
  setSubgenreActive(active: Array<number>) {
    return this.subgenreActive.next(active);
  }
  getSubgenreActive(): Observable<Array<number>> {
    return this.subgenreActive.asObservable();
  }

  setNewSubgenreActive(val: boolean) {
    return this.newSubgenreActive.next(val);
  }
  getNewSubgenreActive(): Observable<boolean> {
    return this.newSubgenreActive.asObservable();
  }
}
