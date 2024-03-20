import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTricksComponent } from './choose-tricks.component';

describe('ChooseTricksComponent', () => {
  let component: ChooseTricksComponent;
  let fixture: ComponentFixture<ChooseTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseTricksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
