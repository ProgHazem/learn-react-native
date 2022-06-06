import {Button, TextInput, View, StyleSheet, Modal} from "react-native";
import {useState} from "react";

interface inputComponentInterface {
    goals: {key: string, item: string}[]
    setGoals: Function
    setVisible: Function
    visible?: boolean
}

const InputComponent = ({setGoals, goals, visible, setVisible}: inputComponentInterface) => {
    const [goal, setGoal] = useState("")

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.body}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={(e) => setGoal(e)}/>
                <View style={styles.button}>
                    <Button title="Cancel"  color="red" onPress={() => {
                        setVisible(false)
                    }}/>
                    <Button title="Add" onPress={() => {
                        setGoals([...goals, {key: Math.random().toString(), item: goal}])
                        setVisible(false)
                    }}/>
                </View>
            </View>
        </Modal>)
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 2
    },
    button: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%"
    },
})

InputComponent.defaultProps ={
    visible: false
}

export default InputComponent
