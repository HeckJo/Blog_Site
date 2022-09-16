import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastEntryComponent } from './last-entry.component';

describe('LastEntryComponent', () => {
  let component: LastEntryComponent;
  let fixture: ComponentFixture<LastEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
