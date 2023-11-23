import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoThreejsComponent } from './demo-threejs.component';

describe('DemoThreejsComponent', () => {
  let component: DemoThreejsComponent;
  let fixture: ComponentFixture<DemoThreejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoThreejsComponent]
    });
    fixture = TestBed.createComponent(DemoThreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
