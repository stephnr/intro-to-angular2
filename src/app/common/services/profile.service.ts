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
    let options = new RequestOptions({
      url:    `${APP_CONSTANTS.api}/${this._profileURL}/${username}`,
      method: 'GET',
      headers: this._buildHeaders()
    });

    return this.http.request(new Request(options)).toPromise();
  }

  // Follow a user
  follow(username: string) {
    return this.http.post(`${APP_CONSTANTS.api}/${this._profileURL}/${username}/follow`, null, this._buildHeaders()).toPromise();
  }

  // Unfollow a user
  unfollow(username: string) {
    // Create the $http object for this request
    let options = new RequestOptions({
      url:    `${APP_CONSTANTS.api}/${this._profileURL}/${username}/follow`,
      method: 'DELETE',
      headers: this._buildHeaders()
    });

    return this.http.request(new Request(options)).toPromise();
  }

  /*= End of METHODS =*/
  /*=============================================<<<<<*/

  private _buildHeaders() {
    if(this._jWTService.exists()) {
      return (new Headers({ 'Content-Type': 'application/json', 'authorization': `Token ${this._jWTService.get()}` }));
    } else {
      return (new Headers({ 'Content-Type': 'application/json' }));
    }
  }
}
