import {Injectable} from 'angular2/core';

import {APP_CONSTANTS} from '../constants/app.constants';

interface JWT_Interface {
  parse(token: string): Object;
  exists(): boolean;
  save(token: string): void;
  get(): string;
  destroy(): void;
}

@Injectable()
export class JWTService implements JWT_Interface {
  constructor () {}

  parse(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  exists() {
    let token = this.get();
    return !!token;
  }

  save(token) {
    window.localStorage[APP_CONSTANTS.jwtKey] = token;
  }

  get() {
    return window.localStorage[APP_CONSTANTS.jwtKey];
  }

  destroy() {
    window.localStorage.removeItem(APP_CONSTANTS.jwtKey);
  }
}
