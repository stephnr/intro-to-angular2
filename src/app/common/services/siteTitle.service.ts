import {Injectable} from 'angular2/core';
import {TITLES} from '../constants/siteTitles.constants';

@Injectable()
export class SiteTitleService {
  getSiteTitle(url: string) {
    if(url === '') return TITLES['default'];
    else { return TITLES[url]; };
  }
}
