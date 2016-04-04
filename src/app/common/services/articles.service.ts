/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Injectable, Inject} from 'angular2/core';
import {Subject}    from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, Request, RequestOptions, URLSearchParams} from 'angular2/http';
import {Router} from 'angular2/router';

import {APP_CONSTANTS} from '../constants/app.constants';

import {JWTService} from './jwt.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class ArticleService {

  private _articlesURL = 'articles';
  private _articles: Subject<Object>;
  public articlesAnnounced$: Observable<Object>;

  constructor(private http: Http, private _jWTService: JWTService) {
    this._articles = new Subject<Object>();
    this.articlesAnnounced$ = this._articles.asObservable();
  }

  /*=============================================>>>>>
  = METHODS =
  ===============================================>>>>>*/

  // Favorite an article
  favorite(slug: string) {
    return this.http.post(`${APP_CONSTANTS.api}/${this._articlesURL}/${slug}/favorite`, '').toPromise();
  }

  // Unfavorite an article
  unfavorite(slug: string) {
    return this.http.delete(`${APP_CONSTANTS.api}/${this._articlesURL}/${slug}/favorite`).toPromise();
  }

  // Creates or updates an article
  save(article: any) {
    let request = { url: '', method: '', body: '' };

    // If there's a slug, perform an update via PUT w/ article's slug
    if (article.slug) {
      request.url = `${APP_CONSTANTS.api}/${this._articlesURL}/${article.slug}`;
      request.method = 'PUT';
      // Delete the slug from the article to ensure the server updates the slug,
      // which happens if the title of the article changed.
      delete article.slug;
    // Otherwise, this is a new article POST request
    } else {
      request.url = `${APP_CONSTANTS.api}/${this._articlesURL}`;
      request.method = 'POST';
    }

    // Set the article data in the data attribute of our request
    request.body = JSON.stringify({ article: article });

    return this.http.request(request.url, request).toPromise();
  }

  // Delete an article
  destroy(slug: string) {
    return this.http.delete(`${APP_CONSTANTS.api}/${this._articlesURL}/${slug}`).toPromise();
  }

  // Retrieve a single article
  get(slug: string) {
    return this.http.get(`${APP_CONSTANTS.api}/${this._articlesURL}/${slug}`).toPromise();
  }

  /*
    `query` is typically used as a private method, but can be used
    in controllers if necessary.
    Config object spec:
    {
      type: String [REQUIRED] - Accepts "all", "feed"
      filters: Object - Key value of URL params (i.e. {author:"ericsimons"} )
    }
  */
  query(config) {
    // Create the $http object for this request
    let options = new RequestOptions({
      url:    `${APP_CONSTANTS.api}/${this._articlesURL}/${((config.type === 'feed') ? '/feed' : '')}`,
      method: 'GET',
      search:  new URLSearchParams(),
      headers: this._buildAuthHeaders()
    });

    if(config.filters) {
      options.search.set('limit', config.limit || 10);
      options.search.set('offset', config.offset || 0);
    }

    return this.http.request(new Request(options)).toPromise().then(res => {
      this.announceArticles(res.json().articles);
    });
  }

  /*= End of METHODS =*/
  /*=============================================<<<<<*/

  announceArticles(articles: Object) {
    this._articles.next(articles);
  }

  private _buildAuthHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'authorization': `Token ${this._jWTService.get()}` });
    return headers;
  }
}
