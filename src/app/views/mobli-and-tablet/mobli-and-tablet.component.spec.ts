import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobliAndTabletComponent } from './mobli-and-tablet.component';

describe('MobliAndTabletComponent', () => {
  let component: MobliAndTabletComponent;
  let fixture: ComponentFixture<MobliAndTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobliAndTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobliAndTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
