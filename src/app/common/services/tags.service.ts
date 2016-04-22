import {Injectable, Inject} from 'angular2/core';
import {Subject}    from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Router} from 'angular2/router';

import {JWTService} from '../../common/services/jwt.service';

import {TagsServiceInterface} from './definitions/tags.d.ts';

import {APP_CONSTANTS} from '../constants/app.constants';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class TagsService implements TagsServiceInterface {

  private _tagsURL = 'tags';
  private _tags : Subject<any>;
  private _errors : Subject<Object>;

  public tagsAnnounced$ : Observable<User>;
  public errorsAnnounced$ : Observable<User>;

  constructor (private http: Http, private _jWTService: JWTService) {
    this._jWTService = _jWTService;
    this._tags = new Subject<any>();
    this._errors = new Subject<Object>();
    this.tagsAnnounced$ = this._tags.asObservable();
    this.errorsAnnounced$ = this._errors.asObservable();
  }

  getAll() {
    return this.http.get(`${APP_CONSTANTS.api}/${this._tagsURL}`)
    .toPromise().then(res => {
      this.announceTags(res.json());
    }).catch(err => {
      this.announceErrors(err.json());
    });
  }

  announceTags(tags: any) {
    this._tags.next(tags);
  }

  announceErrors(err: Object) {
    this._errors.next(err);
  }
}
