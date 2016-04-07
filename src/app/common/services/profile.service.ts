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
export class ProfileService {

  private _profileURL = 'profiles';

  constructor(private http: Http, private _jWTService: JWTService) {}

  /*=============================================>>>>>
  = METHODS =
  ===============================================>>>>>*/

  // Retrieve a user's profile
  get(username: string) {
    return this.http.get(`${APP_CONSTANTS.api}/${this._profileURL}/${username}`, this._buildAuthHeaders()).toPromise();
  }

  // Follow a user
  follow(username: string) {
    return this.http.post(`${APP_CONSTANTS.api}/${this._profileURL}/${username}/follow`, null, this._buildAuthHeaders()).toPromise();
  }

  // Unfollow a user
  unfollow(username: string) {
    return this.http.delete(`${APP_CONSTANTS.api}/${this._profileURL}/${username}/follow`, this._buildAuthHeaders()).toPromise();
  }

  /*= End of METHODS =*/
  /*=============================================<<<<<*/

  private _buildAuthHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'authorization': `Token ${this._jWTService.get()}` });
    return (new RequestOptions({ headers: headers }));
  }
}
