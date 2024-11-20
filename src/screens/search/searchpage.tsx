import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchCard from './search_card';

const SearchPage = () => {
    return (
        <View style={styles.container}>
            <SearchCard />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00808030',
    },
});

export default SearchPage;