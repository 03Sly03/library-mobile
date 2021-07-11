import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Books({title, authors, navigation}) {
    return (
        <View>
            <Entypo name="book" size={24} color="black" onPress={() => navigation.reset('Book')}/>
            <Text>
                {title}
            </Text>
            <Text>
                {authors}
            </Text>
        </View>
    )
}
