import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostOfUsersComponent } from './components/post-of-users/post-of-users.component';


const routes: Routes = [
  {path: 'users', component: AllUserComponent, children:[
    {path: 'posts/:id', component: PostOfUsersComponent}]}

  ];

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    PostOfUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
