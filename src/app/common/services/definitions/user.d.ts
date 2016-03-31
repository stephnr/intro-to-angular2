import {Observable} from 'rxjs/Observable';

export interface UserServiceInterface {
  errorsAnnounced$: Observable<Object>;

  update(fields: any): void;
  attemptAuth(type: string, formData: Object): void;
  announceErrors(errors: Object): void;
}
