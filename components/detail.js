import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
 
 export default class Detail extends React.Component {
 
  render() {
    return (
      <View>
        <Text>Details page here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35'
  },
  itemText: {
color: '#fff',
fontSize: 24
  }
});
