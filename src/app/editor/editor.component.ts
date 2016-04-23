/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';

import {Router, RouteParams} from 'angular2/router';

import {ListErrorsComponent} from '../common/components/listErrors.component';

import {ArticleService} from '../common/services/articles.service';
import {Article} from '../article/article';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'editor',
  templateUrl: 'src/app/editor/layout/editor.html',
  providers:   [ArticleService],
  directives:  [FORM_DIRECTIVES, ListErrorsComponent]

})
export class EditorComponent {
  public article: any;
  public editMode: boolean;
  public errors: any;
  public isSubmitting: boolean;
  public tagList: Array<string>;

  constructor(private _router: Router, private _routeParams: RouteParams, private _articleService: ArticleService) {
    this.isSubmitting = false;

    this.article = new Article();
    this.tagList = new Array<string>();
    this.errors = {};

    if(this._routeParams.params['slug'] !== undefined) {
      this.editMode = true;
      // Load the existing article
      this._articleService.get(this._routeParams.params['slug']).then(
        (res) => {
          this.tagList = res.json().article.tagList;
          let a: any = res.json().article;
          this.article = {
            title: a.title,
            description: a.description,
            body: a.body,
            tagField: [],
          };
        }
      );
    }
  }

  addTag(keyCode: number) {
    // array includes method
    if(keyCode === 13) {
      if (!!this.tagList.indexOf(this.article.tagField) && !this.isSubmitting) {
        this.tagList.push(this.article.tagField);
        this.article.tagList = this.tagList;
        delete this.article.tagField;
      }
    }
  }

  removeTag(tag: any) {
    if (!this.isSubmitting) {
      this.tagList = this.tagList.filter((slug: string) => slug != tag);
    }
  }

  submit() {
    this.isSubmitting = true;

    if(this.editMode) {
      // Update the Article
      this.article.slug = this._routeParams.params['slug'];
    }

    // Save the post
    this._articleService.save(this.article).then(
      (res: any) => {
        if(res.json().article.slug.length > 0) {
          this._router.navigate(['View-Article', { slug: res.json().article.slug }]);
        } else {
          this.isSubmitting = false;
          this.errors = { 'article': [ 'title is missing' ] }
        }
      },
      (err: any) => {
        this.isSubmitting = false;
        this.errors = err.json().errors;
      }
    );
  }
}
