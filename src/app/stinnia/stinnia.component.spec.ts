import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StinniaComponent } from './stinnia.component';

describe('StinniaComponent', () => {
  let component: StinniaComponent;
  let fixture: ComponentFixture<StinniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StinniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StinniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
