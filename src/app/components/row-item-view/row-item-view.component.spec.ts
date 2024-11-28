import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItemViewComponent } from './row-item-view.component';

describe('RowItemViewComponent', () => {
  let component: RowItemViewComponent;
  let fixture: ComponentFixture<RowItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowItemViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
