import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { TodosComponent } from './2-todos/todos.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { GreeterComponent } from './greeter/greeter.component';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    GreeterComponent,
    NavComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
