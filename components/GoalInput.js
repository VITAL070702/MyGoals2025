import {useState} from "react"
import {View, TextInput, Button, StyleSheet} from "react-native"
 function GoalInput({onAddGoal}){
    const [enteredGoalText,setEnteredGoalText]=useState('')
    function handlerInputGoal(enteredGoalText,setEnteredGoalText){
        //console.log (enteredText)
        setEnderedGoalText(enteredText)
    }
  function addGoalHandler(){
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
    console.log('addGoalHnadler')
  }
  return(
  <View style={StyleSheet.inputContainer}>
    <TextInput
        style={style.textInput}
        placeholder='Your GoalInput'
        onChangeText={handlerInputGoal}
        value={enteredGoalText}
        />
   <Button
   title='Add Goal'
   color={'#A3FFD06'}
   onPress={addGoalHandler}
/>
  </View>
  )
}
export default GoalInput 

const styles =StyleSheet.create({
    inoutContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBotton:20,
        borderBottonwidth:1,
        borderBottonColor:'#7BC9FF',
    },
    textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'80%',
        marginRight:3,
        padding:8,
        borderRadius:5
    },
})