import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/routers';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../theme/appTheme';



const Pagina2Screen = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 3 Screen</Text>            
            <Button 
                title="Ir a página 3"
                onPress={ () => navigator.dispatch(
                    CommonActions.navigate({name: 'Pagina3Screen'})
                ) }
            />
        </View>
    )
}

export default Pagina2Screen
