/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';

import {Router, RouteParams} from 'angular2/router';

import {ArticleService} from '../common/services/articles.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'editor',
  templateUrl: 'src/app/editor/layout/editor.html',
  providers:   [ArticleService],
  directives:  [FORM_DIRECTIVES]

})
export class EditorComponent {
  public isSubmitting: boolean;
  public article: ControlGroup;
  public errors: any;
  public tagList: Array<string>;

  constructor(private _router: Router, private _routeParams: RouteParams, private _articleService: ArticleService) {
    this.isSubmitting = false;
    this.tagList = new Array<string>();

    this.article = new ControlGroup({
      title: new Control(''),
      description: new Control(''),
      body: new Control(''),
      tagField: new Control('')
    });

    if(this._routeParams.params['slug'] !== undefined) {
      // Load the existing article
      this._articleService.get(this._routeParams.params['slug']).then(
        (res) => {
          let a: any = res.json().article;
          this.article = new ControlGroup({
            title: new Control(a.title),
            description: new Control(a.description),
            body: new Control(a.body),
            tagField: new Control(a.tagList),
          });
        }
      );
    }
  }

  addTag(keyCode: number) {
    // array includes method
    if(keyCode === 13) {
      if (!!this.tagList.indexOf(this.article.value.tagField) && !this.isSubmitting) {
        this.tagList.push(this.article.value.tagField);
        this.article.controls['tagField'].updateValue('');
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

    this._articleService.save(this.article.value).then(
      (res: any) => {
        this._router.navigate(['View-Article', { slug: res.json().article.slug }]);
      },
      (err: any) => {
        this.isSubmitting = false;
        this.errors = err.json().errors;
      }
    );
  }
}
