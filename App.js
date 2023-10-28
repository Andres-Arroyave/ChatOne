import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatItem from './src/components/ChatItem';
import ChatList from './src/screens/ChatList';

const chat = {
  id: 1,
  user: {
    img: "https://i.pinimg.com/564x/37/58/f3/3758f36a206d8d8b5715fc1e998eeb08.jpg",
    name: "Andrés",
  },
  lastMessage: {
    text: "Hola, cómo vamos?",
    createdAt: "10:30"
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ChatItem chat={chat}/>*/}
      <ChatList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
