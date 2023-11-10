import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#232442', //TODO Primary color
    },
});

interface HeaderProps {
    greeting: string,
    avatarURL: string
}

const Header = ({ greeting, avatarURL }: HeaderProps) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={styles.header}>
            <Avatar.Image size={48} source={{ uri: avatarURL }} />
            <Appbar.Content title={greeting} />
            <Appbar.Action icon="bell" onPress={_handleMore} />
        </Appbar.Header>
    );
};

export default Header;