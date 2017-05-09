Clave keystore: 123456
Alias: ionDemo

--

# Pasos para hacer release en android

- ionic cordova:build android --prod --release
- Generar llave si es el primer release
- keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /Users/nicolas/develop/projects/ion-book/course/keysApp105/my-release-key.keystore /Users/nicolas/develop/projects/ion-book/course/app105/platforms/android/build/outputs/apk/android-release-unsigned.apk ionDemo
- /Users/nicolas/Development/android-sdk/build-tools/25.0.2/zipalign -v 4 /Users/nicolas/develop/projects/ion-book/course/app105/platforms/android/build/outputs/apk/android-release-unsigned.apk ionDemo.apk