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

  constructor() {
    this.bio = '';
    this.createdAt = '';
    this.email = '';
    this.id = 0;
    this.image = '';
    this.token = '';
    this.updatedAt = '';
    this.username = '';
  }
}
