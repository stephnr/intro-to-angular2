/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';

import {Router} from 'angular2/router';

import {User} from '../../auth/components/user';

import {ProfileService} from '../services/profile.service';
import {ArticleService} from '../services/articles.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'follow-btn',
  templateUrl: 'src/app/common/components/layout/followBtn.html',
  providers:   [ProfileService]
})
export class FollowBtn {
  @Input() user: User;
  @Input() author: User;
  public isSubmitting: boolean;

  constructor(private _router: Router, private _articleService: ArticleService, private _profileService: ProfileService) {
    this.isSubmitting = false;
    this.author = new User();
    this.user = new User();
  }

  submit() {
    this.isSubmitting = true;

    if (!this.user) {
      this._router.navigate(['Register']);
      return;
    }

    // If following already, unfollow
    if (this.author.following) {
      this._profileService.unfollow(this.author.username).then(
        (res: any) => {
          this.isSubmitting = false;
          this.author.following = false;
          this._articleService.announceArticles(res.json().article);
        }
      )
    // Otherwise, follow them
    } else {
      this._profileService.follow(this.author.username).then(
        (res: any) => {
          this.isSubmitting = false;
          this.author.following = true;
          this._articleService.announceArticles(res.json().article);
        }
      );
    }
  }
}
