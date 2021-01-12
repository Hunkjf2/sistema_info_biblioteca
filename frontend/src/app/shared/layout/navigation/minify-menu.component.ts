import {Component} from '@angular/core';

import * as fromLayout from '@app/core/store/layout';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sa-minify-menu',
  template: ``,
})
export class MinifyMenuComponent {

  constructor(
   private store: Store<any>
  ) {
  }

  toggle() {
    this.store.dispatch(new fromLayout.MinifyMenu())
  }
}
