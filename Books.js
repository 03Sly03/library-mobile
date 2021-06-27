import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Person({title, body}) {


    return (
        <View>
            <Entypo name="book" size={24} color="black" />
            <Text>
                {title}
            </Text>
            <Text>
                {body}
            </Text>
        </View>
    )
}
