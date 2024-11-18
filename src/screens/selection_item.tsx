import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

const SelectionItem = ({ text1, text2, isHighlighted, onPress }: {
    text1: string;
    text2: string;
    isHighlighted: boolean;
    onPress: () => void;
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={isHighlighted ? styles.highlightedCard : styles.card}>
                <View style={styles.column}>
                    <Text style={[styles.titleText, styles.spacing]}>{text1}</Text>
                    <Text style={[styles.text, styles.spacing]}>{text2}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    highlightedCard: {
        backgroundColor: '#00000015',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 5,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    text: {
        fontSize: 15,
    },
    button: {
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 5,
    },
    spacing: {
        margin: 0,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default SelectionItem;