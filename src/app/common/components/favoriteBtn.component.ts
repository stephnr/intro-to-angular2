/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';

import {Router} from 'angular2/router';

import {UserService} from '../services/user.service';
import {ArticleService} from '../services/articles.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'favorite-btn',
  templateUrl: 'src/app/common/components/layout/favoriteBtn.html',
  providers:   [UserService]
})
export class FavoriteButton {
  @Input() article: any;
  public isSubmitting: boolean;

  constructor(private _router: Router,private _userService: UserService, private _articleService: ArticleService) {}

  submit() {
    this.isSubmitting = true;

    if(!this._userService.isAuthorized()) {
      this._router.navigate(['Register']);
      return;
    }

    // If fav'd already, unfavorite it
    if (this.article.favorited) {
      this._articleService.unfavorite(this.article.slug).then(
        (res: any) => {
          this.isSubmitting = false;
          this.article.favorited = false;
          this.article.favoritesCount--;
          this._articleService.announceArticles(res.json().article);
        }
      )
    // Otherwise, favorite it
    } else {
      this._articleService.favorite(this.article.slug).then(
        (res: any) => {
          this.isSubmitting = false;
          this.article.favorited = true;
          this.article.favoritesCount++;
          this._articleService.announceArticles(res.json().article);
        }
      )
    }
  }
}
