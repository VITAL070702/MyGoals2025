import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App () {
  const [goals, setGoals] = useState([])

  function handleAddGoal (enteredGoalText) {
    setGoals(() => [...goals, { text: enteredGoalText, key: Math.random().toString() }])
    console.log('goals', goals)
    console.log('handleAddGoal')
  }

  function handleDeleteGoal (id) {
    console.log('delete')
    const deleteGoal = goals.filter((goal) => { return goal.key !== id })
    setGoals(deleteGoal)
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals} renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                onDeleteItem={handleDeleteGoal}
                id={itemData.key}
              />
            )
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  btnGoal: {
    borderRadius: 20,
    backgroundColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5
  },
  goalsContainer: {
    flex: 5
  }
})
