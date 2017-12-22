import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificJobComponent } from './specific-job.component';

describe('SpecificJobComponent', () => {
  let component: SpecificJobComponent;
  let fixture: ComponentFixture<SpecificJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
