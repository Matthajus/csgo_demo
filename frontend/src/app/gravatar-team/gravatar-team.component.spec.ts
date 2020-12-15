import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravatarTeamComponent } from './gravatar-team.component';

describe('GravatarTeamComponent', () => {
  let component: GravatarTeamComponent;
  let fixture: ComponentFixture<GravatarTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravatarTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravatarTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
