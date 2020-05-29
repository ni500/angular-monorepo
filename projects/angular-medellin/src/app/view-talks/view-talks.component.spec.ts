import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTalksComponent } from './view-talks.component';

describe('ViewTalksComponent', () => {
  let component: ViewTalksComponent;
  let fixture: ComponentFixture<ViewTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
