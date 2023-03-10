import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthistoryComponent } from './studenthistory.component';

describe('StudenthistoryComponent', () => {
  let component: StudenthistoryComponent;
  let fixture: ComponentFixture<StudenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
