/// <reference path="./definitions/article.d.ts"/>

export class Article implements ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Array<string>;
  description: string;
  author: any;
  favorited: boolean;
  favoritesCount: number;

  constructor() {
    this.title = '';
    this.slug = '';
    this.body = '';
    this.createdAt = '';
    this.updatedAt = '';
    this.tagList = new Array();
    this.description = '';
    this.author = {};
    this.favorited = true;
    this.favoritesCount = 0;
  }
}
