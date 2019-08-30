import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponentComponent } from './artist-component.component';

describe('ArtistComponentComponent', () => {
  let component: ArtistComponentComponent;
  let fixture: ComponentFixture<ArtistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
