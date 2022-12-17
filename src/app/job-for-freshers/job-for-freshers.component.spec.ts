import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobForFreshersComponent } from './job-for-freshers.component';

describe('JobForFreshersComponent', () => {
  let component: JobForFreshersComponent;
  let fixture: ComponentFixture<JobForFreshersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobForFreshersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobForFreshersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
