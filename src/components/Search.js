import React from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

class Search extends React.Component {
    render() {
        return(
            <View>
                <TextInput
                    placeholder='Titre du film'
                    onChangetext={text => console.warn(text)}
                    style={styles.textInput}
                />
                <Button title="Rechercher" onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search
