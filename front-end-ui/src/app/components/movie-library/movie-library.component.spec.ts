import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLibraryComponent } from './movie-library.component';

describe('MovieLibraryComponent', () => {
  let component: MovieLibraryComponent;
  let fixture: ComponentFixture<MovieLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
