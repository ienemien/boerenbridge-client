import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualTricksComponent } from './actual-tricks.component';

describe('ActualTricksComponent', () => {
  let component: ActualTricksComponent;
  let fixture: ComponentFixture<ActualTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualTricksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
