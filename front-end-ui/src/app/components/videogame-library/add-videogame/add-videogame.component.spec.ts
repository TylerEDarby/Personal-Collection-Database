import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideogameComponent } from './add-videogame.component';

describe('AddVideogameComponent', () => {
  let component: AddVideogameComponent;
  let fixture: ComponentFixture<AddVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVideogameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
