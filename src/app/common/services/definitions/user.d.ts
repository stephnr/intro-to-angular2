import {Observable} from 'rxjs/Observable';

export interface UserServiceInterface {
  errorsAnnounced$: Observable<Object>;
  userAnnounced$: Observable<Object>;

  update(fields: any): void;
  attemptAuth(type: string, formData: Object): void;
  ensureAuthIs(userFoundFlag: boolean): void;
  isAuthorized(): boolean;
  logout(): void;
  
  announceErrors(errors: Object): void;
  verifyAuth(): void;
  getUser(): void;
}
