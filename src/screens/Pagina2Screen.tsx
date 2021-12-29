import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/routers';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({title: 'Hola mundo', headerBackTitle: 'Atras'});
  }, []);
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3 Screen</Text>
      <Button
        title="Ir a página 3"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Pagina3Screen'}))
        }
      />
    </View>
  );
};

export default Pagina2Screen;
