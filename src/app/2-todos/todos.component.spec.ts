/* tslint:disable:no-unused-variable */
import {
  async,
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpModule],
        declarations: [TodosComponent],
        providers: [TodoService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should load todos from the server',
    // async(() => {
    fakeAsync(() => {
      // for component level service
      // fixture.debugElement.injector.get(TodoService);

      // observable version
      // const service = TestBed.get(TodoService);
      // spyOn(service, 'getTodos').and.returnValue(Observable.from([1, 2, 3]));

      // fixture.detectChanges();

      // expect(component.todos.length).toBe(3);

      // promise version
      const service = TestBed.get(TodoService);
      spyOn(service, 'getTodosPromise').and.returnValue(
        Promise.resolve([1, 2, 3])
      );

      fixture.detectChanges();

      // fixture.whenStable().then(() => {
      //   expect(component.todos.length).toBe(3);
      // });

      tick();
      expect(component.todos.length).toBe(3);
    })
  );
});
