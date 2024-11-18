import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SelectionItem from './selection_item';

const SearchCard = () => {
    const [highlightedItem, setHighlightedItem] = useState("Size");
    const items = [
        { text1: "Size", text2: "250 ml" },
        { text1: "Scent", text2: "XYZ" },
        { text1: "Price", text2: "200-400" }
    ];

    return (
        <View style={styles.card}>
            return (
            <View style={[styles.row, { alignItems: 'center' }]}>
                {items.map((item, index) => (
                    <SelectionItem
                        key={index}
                        text1={item.text1}
                        text2={item.text2}
                        isHighlighted={highlightedItem === item.text1}
                        onPress={() => setHighlightedItem(item.text1)}
                    />
                ))}
                <View style={{ width: 5 }} />
                <View>
                    <View style={[{ flexDirection: 'row', alignItems: 'center' }, styles.button]}>
                        <Image source={require('../assets/magnifying-glass.png')} style={{ width: 16, height: 16, marginRight: 10 }} />
                        <Text style={styles.buttonText}>
                            Search
                        </Text>
                    </View>
                </View>
            </View>
            );
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 16,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 7,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default SearchCard;