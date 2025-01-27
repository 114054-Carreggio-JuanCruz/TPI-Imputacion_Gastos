import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCobrosComponent } from './list-cobros.component';

describe('ListCobrosComponent', () => {
  let component: ListCobrosComponent;
  let fixture: ComponentFixture<ListCobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCobrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
