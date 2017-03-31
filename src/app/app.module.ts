import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { TopPage } from '../pages/top/top';
import { UsersPage } from '../pages/users/users';
import { TasksPage } from '../pages/tasks/tasks';
import { AlbumDetailPage } from '../pages/album-detail/album-detail';
import { GalleryPage } from '../pages/gallery/gallery';

import { AlbumsService } from '../providers/albums-service';
import { UsersService } from '../providers/users-service';

const PAGES = [
  TutorialPage,
  LoginPage,
  RegisterPage,
  HomePage,
  TimelinePage,
  TopPage,
  UsersPage,
  TasksPage,
  AlbumDetailPage,
  GalleryPage
];

@NgModule({
  declarations: [
    MyApp,
    ...PAGES
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...PAGES
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Native
    StatusBar,
    SplashScreen,
    //Services
    AlbumsService,
    UsersService
  ]
})
export class AppModule {}
