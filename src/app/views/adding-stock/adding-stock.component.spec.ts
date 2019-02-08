import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingStockComponent } from './adding-stock.component';

describe('AddingStockComponent', () => {
  let component: AddingStockComponent;
  let fixture: ComponentFixture<AddingStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
