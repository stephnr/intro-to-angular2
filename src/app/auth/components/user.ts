/// <reference path="./definitions/user.d.ts"/>

export class User implements UserInterface {
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  image: string;
  token: string;
  updatedAt: string;
  username: string;
  following: boolean;

  constructor() {
    this.bio = '';
    this.createdAt = '';
    this.email = '';
    this.id = 0;
    this.image = 'https://static.productionready.io/images/smiley-cyrus.jpg';
    this.token = '';
    this.updatedAt = '';
    this.username = '';
    this.following = false;
  }
}
