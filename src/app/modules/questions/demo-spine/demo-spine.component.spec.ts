import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSpineComponent } from './demo-spine.component';

describe('DemoSpineComponent', () => {
  let component: DemoSpineComponent;
  let fixture: ComponentFixture<DemoSpineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoSpineComponent]
    });
    fixture = TestBed.createComponent(DemoSpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
