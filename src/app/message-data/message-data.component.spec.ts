import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDataComponent } from './message-data.component';

describe('MessageDataComponent', () => {
  let component: MessageDataComponent;
  let fixture: ComponentFixture<MessageDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
