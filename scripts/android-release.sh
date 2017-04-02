#!/bin/bash
rm -rf ionDemo.apk
ionic cordova:build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /Users/nicolas/develop/projects/ion-book/course/keysApp105/my-release-key.keystore /Users/nicolas/develop/projects/ion-book/course/app105/platforms/android/build/outputs/apk/android-release-unsigned.apk ionDemo
/Users/nicolas/Development/android-sdk/build-tools/25.0.2/zipalign -v 4 /Users/nicolas/develop/projects/ion-book/course/app105/platforms/android/build/outputs/apk/android-release-unsigned.apk ionDemo.apk