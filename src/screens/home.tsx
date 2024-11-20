import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const navigateToSearchPage = () => {
        navigation.navigate('SearchPage');
    };

    return (
        <View style={styles.container}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Button
                    key={index}
                    title={`Button ${index + 1}`}
                    onPress={navigateToSearchPage}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00808030',
    },
});

export default HomeScreen;