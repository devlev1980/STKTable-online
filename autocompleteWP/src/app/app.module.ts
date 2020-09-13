import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AutocompleteSpfxWebPartComponent } from './autocomplete-spfx-web-part/autocomplete-spfx-web-part.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { HighlightPipe } from './pipes/highlight.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AutocompleteSpfxWebPartComponent,
    SearchPipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    TypeaheadModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,

  ],
  providers: [],
  entryComponents: [AutocompleteSpfxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AutocompleteSpfxWebPartComponent, { injector: this.injector });
    customElements.define('app-autocomplete-spfx-web-part', el);
  }
}
