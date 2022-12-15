import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentSolutionComponent } from './recruitment-solution.component';

describe('RecruitmentSolutionComponent', () => {
  let component: RecruitmentSolutionComponent;
  let fixture: ComponentFixture<RecruitmentSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
