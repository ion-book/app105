import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { TopPage } from '../pages/top/top';
import { UsersPage } from '../pages/users/users';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;

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

  profilePages: any[] = [
    {
      title: 'Profile',
      icon: 'grid',
      component: ProfilePage,
    },
    {
      title: 'Settings',
      icon: 'archive',
      component: SettingsPage
    }
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openTabPage(page){
    this.nav.setRoot( page.component, {
      tabIndex: page.tabIndex
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

  logout(){
    this.nav.setRoot( TutorialPage );
  }
}
