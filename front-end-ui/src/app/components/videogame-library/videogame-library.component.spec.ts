import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameLibraryComponent } from './videogame-library.component';

describe('VideogameLibraryComponent', () => {
  let component: VideogameLibraryComponent;
  let fixture: ComponentFixture<VideogameLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
