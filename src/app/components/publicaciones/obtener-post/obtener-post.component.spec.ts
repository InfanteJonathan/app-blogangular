import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPostComponent } from './obtener-post.component';

describe('ObtenerPostComponent', () => {
  let component: ObtenerPostComponent;
  let fixture: ComponentFixture<ObtenerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObtenerPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
