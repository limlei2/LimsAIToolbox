import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHelperComponent } from './resume-helper.component';

describe('ResumeHelperComponent', () => {
  let component: ResumeHelperComponent;
  let fixture: ComponentFixture<ResumeHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
