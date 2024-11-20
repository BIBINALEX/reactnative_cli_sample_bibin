import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const navigateToSearchPage = (route: string) => {
        navigation.navigate(route);
    };

    return (
        <FlatList
            style={styles.container}
            data={["Hello", "Search", "Contacts"]}
            renderItem={({ item, index }) => (
                <View style={styles.button}>
                    <Button
                        title={`Task ${index + 1} - ${item}`}
                        onPress={() => {
                            navigateToSearchPage(item);
                        }}
                    />
                </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00808030',
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    }
});

export default HomeScreen;