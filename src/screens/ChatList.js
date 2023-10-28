import { FlatList } from "react-native";
import chats from "./../../assets/data/chats.json"
import ChatItem from "./../components/ChatItem"

function ChatList (){
    return(
        <FlatList
            data={chats}
            renderItem={({item}) => <ChatItem chat={item} />}
        />
    )
}

export default ChatList;