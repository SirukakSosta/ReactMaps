# ReactMaps
 - React Maps : https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
## Changes for Android 
 - https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md#build-configuration-on-android
```sh
...
dependencies {
   ...
   implementation(project(':react-native-maps')){
       exclude group: 'com.google.android.gms', module: 'play-services-base'
       exclude group: 'com.google.android.gms', module: 'play-services-maps'
   }
   implementation 'com.google.android.gms:play-services-base:10.0.1'
   implementation 'com.google.android.gms:play-services-maps:10.0.1'
}
```
change these two lines

```sh
    implementation 'com.google.android.gms:play-services-base:12.0.0'
    implementation 'com.google.android.gms:play-services-maps:12.0.0'
```