import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [goal, setGoal] = useState("")
  const [goals, setGoals] = useState<string[]>([])
  // @ts-ignore
  return (
    <View style={styles.container}>
     <View style={styles.body}>
       <TextInput placeholder="Course Goal" style={styles.input} onChangeText={(e) => setGoal(e)}/>
       <Button title="Add" onPress={() => setGoals([...goals, goal])}/>
     </View>
      {goals && goals > 0 &&
          <view>
            {goals?.map((goal) => <Text key={goal}>{goal}</Text>)}
          </view>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
