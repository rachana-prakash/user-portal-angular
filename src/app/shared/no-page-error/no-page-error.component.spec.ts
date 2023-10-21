import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageErrorComponent } from './no-page-error.component';

describe('NoPageErrorComponent', () => {
  let component: NoPageErrorComponent;
  let fixture: ComponentFixture<NoPageErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPageErrorComponent]
    });
    fixture = TestBed.createComponent(NoPageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
