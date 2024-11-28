import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentEditComponent } from './coment-edit.component';

describe('ComentEditComponent', () => {
  let component: ComentEditComponent;
  let fixture: ComponentFixture<ComentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
