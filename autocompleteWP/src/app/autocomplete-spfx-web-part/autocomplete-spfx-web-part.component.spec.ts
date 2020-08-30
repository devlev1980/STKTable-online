import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSpfxWebPartComponent } from './autocomplete-spfx-web-part.component';

describe('AutocompleteSpfxWebPartComponent', () => {
  let component: AutocompleteSpfxWebPartComponent;
  let fixture: ComponentFixture<AutocompleteSpfxWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteSpfxWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSpfxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
