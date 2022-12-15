import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresumeComponent } from './postresume.component';

describe('PostresumeComponent', () => {
  let component: PostresumeComponent;
  let fixture: ComponentFixture<PostresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostresumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
