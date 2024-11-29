import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipCounterComponent } from './relationship-counter.component';

describe('RelationshipCounterComponent', () => {
  let component: RelationshipCounterComponent;
  let fixture: ComponentFixture<RelationshipCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
