import Controller from '@ember/controller';
import { isHTMLSafe } from '@ember/string';

export default class ApplicationController extends Controller {
  get isSafe() {
    return isHTMLSafe('probably not');
  }
}
