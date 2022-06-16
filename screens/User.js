import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function UserScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={username}
        mode='outlined'
        label='Username'
        style={styles.input}
        onChangeText={newText => setUsername(newText)}

      />
      <TextInput
        value={password}
        mode='outlined'
        label='Password'
        style={styles.input}
        onChangeText={newText => setPassword(newText)}

      />
      <View style={{
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',

      }}>
        <Pressable style={{ flex: 1 }} onPress={() => {
          setPassword("")
          setUsername("")
        }}>
          <Text style={styles.reset}>Reset</Text>
        </Pressable>
        <Pressable style={{ flex: 1 }} onPress={() => { navigation.navigate("Books")}}>
          <Text style={styles.validate}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderColor: "grey"
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center'
  },
  reset: {
    color: "#6200EE",
    fontWeight: 'bold',
    margin: 10,
    fontSize: 16
  },
  validate: {
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 20,
  },

});
export default UserScreen