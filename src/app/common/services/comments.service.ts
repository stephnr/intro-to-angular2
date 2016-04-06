/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Injectable, Inject} from 'angular2/core';
import {Subject}    from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, Request, RequestOptions} from 'angular2/http';
import {Router} from 'angular2/router';

import {APP_CONSTANTS} from '../constants/app.constants';

import {JWTService} from './jwt.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Injectable()
export class CommentService {

  private _commentsURL = 'comments';

  constructor(private http: Http, private _jWTService: JWTService) {}

  /*=============================================>>>>>
  = METHODS =
  ===============================================>>>>>*/

  add(slug: string, payload: any) {
    return this.http.post(`${APP_CONSTANTS.api}/articles/${slug}/comments`, JSON.stringify({
      comment: { body: payload }
    }), this._buildAuthHeaders()).toPromise();
  }

  destroy(commentId: number, slug: string) {
    return this.http.delete(`${APP_CONSTANTS.api}/articles/${slug}/comments/${commentId}`, this._buildAuthHeaders()).toPromise();
  }

  getAll(slug: string) {
    return this.http.get(`${APP_CONSTANTS.api}/articles/${slug}/comments`).toPromise();
  }

  /*= End of METHODS =*/
  /*=============================================<<<<<*/

  private _buildAuthHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'authorization': `Token ${this._jWTService.get()}` });
    return (new RequestOptions({ headers: headers }));
  }
}
