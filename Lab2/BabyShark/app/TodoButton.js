import React from 'react'
import TodoButton from './TodoButton'

import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TodoButton = ({ onPress, complete, name }) => (    
  <TouchableHighlight
    onPress={onPress}
    underlayColor='#efefef'
    style={styles.button}>
    <Text style={[
      styles.text,
      complete ? styles.complete : null,    
      name === 'Delete' ? styles.deleteButton : null ]}    
     >
      {name}
    </Text>
  </TouchableHighlight>
)

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>
        {todo.title}
      </Text>
      <View style={styles.buttons}>
        <TodoButton
          name='Done'
          complete={todo.complete}
          onPress={() => toggleComplete(todo.todoIndex)} />
        <TodoButton
          name='Delete'
          onPress={() => deleteTodo(todo.todoIndex)} />
      </View>
    </View>
  )
  
const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  text: {
    color: '#666666'
  },
  complete: {
    color: 'green',
    fontWeight: 'bold'
  },
  deleteButton: {
    color: 'rgba(175, 47, 47, 1)'
  }
})
export default TodoButtton
