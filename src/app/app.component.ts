import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksLocalPage } from '../pages/tasks-local/tasks-local';
import { TasksFirebasePage } from '../pages/tasks-firebase/tasks-firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TutorialPage;

  @ViewChild(Nav) nav: Nav;

  menuPages: any[] = [
    {
      title: 'Timeline',
      icon: 'images',
      component: HomePage,
      tabIndex: 0
    },
    {
      title: 'Top',
      icon: 'star',
      component: HomePage,
      tabIndex: 1
    },
    {
      title: 'Users',
      icon: 'people',
      component: HomePage,
      tabIndex: 2
    },
  ];

  taskPages: any[] = [
    {
      title: 'Tasks REST',
      icon: 'images',
      component: TasksPage
    },
    {
      title: 'Tasks Local',
      icon: 'star',
      component: TasksLocalPage
    },
    {
      title: 'Tasks Firebase',
      icon: 'star',
      component: TasksFirebasePage
    }
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public fireAuth: AngularFireAuth
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkSession();
    });
  }

  openTabPage(page){
    this.nav.setRoot( page.component, {
      tabIndex: page.tabIndex
    });
  }

  openTasksPage( page ){
    this.nav.setRoot( page.component );
  }

  logout(){
    this.fireAuth.logout();
  }

  private checkSession(){
    this.fireAuth.subscribe(session=>{
      if(session){
        this.nav.setRoot( HomePage );
      }else{
        this.nav.setRoot( TutorialPage );
      }
    });
  }
}
