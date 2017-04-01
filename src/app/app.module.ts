import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { TopPage } from '../pages/top/top';
import { UsersPage } from '../pages/users/users';
import { AlbumDetailPage } from '../pages/album-detail/album-detail';
import { GalleryPage } from '../pages/gallery/gallery';

import { TasksPage } from '../pages/tasks/tasks';
import { TasksLocalPage } from '../pages/tasks-local/tasks-local';
import { TasksFirebasePage } from '../pages/tasks-firebase/tasks-firebase';

import { AlbumsService } from '../providers/albums-service';
import { UsersService } from '../providers/users-service';
import { TasksService } from '../providers/tasks-service';
import { TasksLocalService } from '../providers/tasks-local-service';
import { TasksFirebaseService } from '../providers/tasks-firebase-service';

const firebaseConfig = {
  apiKey: "AIzaSyBSF16hz2SrPzQXLn9aqN1m0w5pTJ6ME_Q",
  authDomain: "eventsapp-478da.firebaseapp.com",
  databaseURL: "https://eventsapp-478da.firebaseio.com",
  projectId: "eventsapp-478da",
  storageBucket: "eventsapp-478da.appspot.com",
  messagingSenderId: "391784029961"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

const PAGES = [
  TutorialPage,
  LoginPage,
  RegisterPage,
  HomePage,
  TimelinePage,
  TopPage,
  UsersPage,
  TasksPage,
  TasksLocalPage,
  TasksFirebasePage,
  AlbumDetailPage,
  GalleryPage
];

@NgModule({
  declarations: [
    MyApp,
    ...PAGES
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
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
    UsersService,
    TasksService,
    TasksLocalService,
    TasksFirebaseService
  ]
})
export class AppModule {}
