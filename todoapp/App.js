import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [todoItems, settodoItems] = useState([]);
  const [inputlist, setinputlist] = useState('');
  const [editState, setEditState] = useState();

  const todoEvent = e => {
    settodoItems(e => e);
    console.log(todoItems);
  };

  const addBtn = () => {
    if (editState) {
      todoItems[editState] = inputlist;
      settodoItems([...todoItems]);
      console.log(todoItems);
    } else {
      settodoItems([...todoItems, inputlist]);
    }

    setEditState();
    setinputlist('');
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headingContainer}>
        <Text style={Styles.todoHeading}>TODO APP</Text>
      </View>

      <View style={Styles.todoListContainer}>
        {todoItems.map((todoVal, index) => {
          return (
            <View>
              <Text style={Styles.todoList} key={index}>
                {todoVal}
              </Text>
              <TouchableOpacity style={Styles.editBtn}>
                <Text>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.deleteBtn}>
                <Text>DELETE</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        {/* <Text style={Styles.todoList}></Text> */}
      </View>
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          placeholder="Add Todo"
          onChangeText={todoEvent}></TextInput>
        <TouchableOpacity onPress={addBtn} style={Styles.addBtn}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  todoHeading: {
    fontSize: 30,
    marginTop: 20,
    paddingTop: 5,
    width: 300,
    height: 60,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    borderRadius: 30,
  },
  todoList: {
    color: 'black',
    marginTop: 30,
  },
  todoListContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'grey',
    width: 265,
    height: 50,
    borderRadius: 30,
    paddingLeft: 15,
    marginLeft: 5,
    marginRight: 4,
  },
  addBtn: {
    backgroundColor: 'green',
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

export default App;
