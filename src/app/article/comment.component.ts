/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

import {User} from '../auth/components/user';

import {CommentService} from '../common/services/comments.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'comment',
  templateUrl: 'src/app/article/layout/comment.html',
  providers:   [CommentService],
  directives:  [NgIf, RouterLink]
})
export class Comment {
  @Input() user: User;
  @Input() comment: any;
  @Input() index: number;
  @Output('delete') del = new EventEmitter<any>();

  constructor(private _router: Router, private _commentService: CommentService) {}

  imageExists() {
    return this.comment.author.image ? this.comment.author.image.length > 0 : false;
  }

  buildDate(date: string) {
    return date.length > 0 ? new Date(date) : new Date();
  }

  canModify() {
    return (this.user.username === this.comment.author.username);
  }

  deleteComment(commentId: number, index: number) {
    return this.del.emit({
      commentId: commentId,
      index: index
    });
  }
}
