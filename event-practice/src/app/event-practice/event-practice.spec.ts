import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPractice } from './event-practice';

describe('EventPractice', () => {
  let component: EventPractice;
  let fixture: ComponentFixture<EventPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(EventPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
