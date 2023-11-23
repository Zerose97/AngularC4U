import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoScreenComponent } from './tempo-screen.component';

describe('TempoScreenComponent', () => {
  let component: TempoScreenComponent;
  let fixture: ComponentFixture<TempoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempoScreenComponent]
    });
    fixture = TestBed.createComponent(TempoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
