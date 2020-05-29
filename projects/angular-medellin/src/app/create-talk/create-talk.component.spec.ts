import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTalkComponent } from './create-talk.component';

describe('CreateTalkComponent', () => {
  let component: CreateTalkComponent;
  let fixture: ComponentFixture<CreateTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
