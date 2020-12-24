import React from 'react';
import {Button, TextInput, View} from "react-native";

class Search extends React.Component {
    render() {
        return(
            <View>
                <TextInput placeholder='Titre du film' onChangetext={text => console.warn(text)} />
                <Button title="Rechercher" onPress={() => {}} />
            </View>
        )
    }
}

export default Search
