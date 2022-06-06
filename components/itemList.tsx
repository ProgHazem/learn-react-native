import React from "react"
import {Text, StyleSheet, TouchableOpacity} from "react-native"

interface goalItemInterface {
    item: string
    onPress: any
}

const ItemGoal = ({item, onPress}: goalItemInterface) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.list}>{item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
        backgroundColor: "#ccc",
        margin: 5
    }
})

export default ItemGoal
