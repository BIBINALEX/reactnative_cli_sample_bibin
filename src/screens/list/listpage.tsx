import React from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';

const ListPage = () => {

    const data = [
        { id: '1', name: 'Miyah Myles', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { id: '2', name: 'June Cha', title: 'Software Engineer', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: '3', name: 'Iida Niskanen', title: 'Data Entry Clerk', number: '123456789', profile_image: 'https://randomuser.me/api/portraits/women/3.jpg' },
        { id: '4', name: 'Renee Sims', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: '5', name: 'Jonathan Nuez', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { id: '6', name: 'Sasha Ho', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { id: '7', name: 'Abdullah Hadley', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { id: '8', name: 'Thomas Stock', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { id: '9', name: 'Veeti Seppanen', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/men/9.jpg' },
        { id: '10', name: 'Bonnie Riley', title: 'Data Entry Clerk', number: '1234567890', profile_image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    ];

    const renderItem = ({ item }: { item: Contacts }) => (
        <View style={styles.item}>
            <View style={styles.row}>
                <Image source={{ uri: item.profile_image }} style={styles.image} />
                <View style={styles.column}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL(`tel:${item.number}`)}>
                    <Text style={styles.callButtonText}>Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <FlatList style={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
};
export default ListPage;

interface Contacts {
    id: string;
    name: string;
    title: string;
    number: string;
    profile_image: string;
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    list: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        justifyContent: 'space-between',
    },
    item: {
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 25,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    column: {
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    callButton: {
        padding: 10,
        borderRadius: 5,
    },
    callButtonText: {
        color: '#4CAF50',
        fontWeight: '600',
        fontSize: 16,
    },
});