import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DailyTask = (props) => {
    return (
        <View style={Styles.item}>
            <View>
            <Text style={Styles.itemText}>{props.text}</Text>
            </View>
            <View style={Styles.itemLeft}>
                <TouchableOpacity style={Styles.circle}></TouchableOpacity>
                <Text>Description</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: '#f6f3ee',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        margin: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10,
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#f6f3ee',
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: 'black',
        marginRight: 15,
    },
    itemText: {
        fontSize: 20,
        maxWidth: '80%',
    },
});

export default DailyTask