import { Button, StyleSheet, TextInput, View, FlatList } from "react-native"
import { useState } from "react"
import ItemGoal from "./components/itemList"
import InputComponent from "./components/InputComponent";

export default function App() {
    const [goals, setGoals] = useState<{ key: string, item: string }[]>([])
    const [visible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Button onPress={() => setVisible(true)} title="+" />
            <InputComponent visible={visible} goals={goals} setGoals={setGoals} setVisible={setVisible} />
            <FlatList keyExtractor={(item, index) => item.key} data={goals}
                      renderItem={(renderGoals) => (<ItemGoal onPress={() => {
                          const allGoalsAfterRemove = goals.filter((goal) => goal.key !== renderGoals.item.key)
                          setGoals(allGoalsAfterRemove)
                      }} item={renderGoals.item.item} />)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});
