import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsforFreshersComponent } from './jobsfor-freshers.component';

describe('JobsforFreshersComponent', () => {
  let component: JobsforFreshersComponent;
  let fixture: ComponentFixture<JobsforFreshersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsforFreshersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsforFreshersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
