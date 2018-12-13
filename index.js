/** @format */
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import AnimatedMarkers from './src/components/AnimatedMarkers';
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

AppRegistry.registerComponent('albums', () => App);