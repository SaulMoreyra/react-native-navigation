import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}

const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 Screen</Text>
            <Button title="Regresar" onPress={()=> navigation.pop()}/>
            <Button title="Pagina 1" onPress={()=> navigation.popToTop()}/>
        </View>
    )
}

export default Pagina3Screen
