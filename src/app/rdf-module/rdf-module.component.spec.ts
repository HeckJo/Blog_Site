import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfModuleComponent } from './rdf-module.component';

describe('RdfModuleComponent', () => {
  let component: RdfModuleComponent;
  let fixture: ComponentFixture<RdfModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdfModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdfModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
