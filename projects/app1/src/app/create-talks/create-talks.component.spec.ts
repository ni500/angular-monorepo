import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTalksComponent } from './create-talks.component';

describe('CreateTalksComponent', () => {
  let component: CreateTalksComponent;
  let fixture: ComponentFixture<CreateTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
