import {StyleSheet, view, Text, Pressable} from "react-native"

function deleteGoalHandler(){
    onDeleteItem(id)
    console.log('delete Goal handeler')

return(
    <Pressable onPress={deleteGoalHandeler}>
        <View style={style.goalsIterm}>
            <Text style={StyleSheet.goaltext}>{itemData.item.text}</Text>
        </View>
    </Pressable>
)
}
export default GoalItem

const styles = StyleSheet.create({
    goalsItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColo:'white'

    },
    goalText:{
        color:'white',
    }
})