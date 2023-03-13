import { Text, VStack, Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native';
import { background } from '../../utils/images';



export function Auth() {
  const navigation = useNavigation();
  return (
<<<<<<< HEAD
    <ImageBackground  source={background} style={styles.backgroundImage} >
       <VStack
        flex={1}
        bg={'black'}
        justifyContent={'center'}
        textAlign={'center'}
        px={8}
        >
 

     
            <Text>Bem vindo </Text>

          <Button bg={'blue.100'} onPress={() => navigation.navigate('Tabs')}>
            <Text>Login</Text>
          </Button>

       </VStack>
    </ImageBackground>
  
=======
    <VStack
      flex={1}
      bg={'red.200'}
      justifyContent={'center'}
      textAlign={'center'}
      px={8}
    >
      <Text color={'black'}>Bem vindo ao TaskEndium</Text>
      <Button onPress={() => navigation.navigate('Tabs')}>
        <Text>Login</Text>
      </Button>
    </VStack>
>>>>>>> 69cf1a5cba2502dbc5c2a325509160bd8630ad73
  );
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    resizeMode: 'cover', 
    width: '100%',
    height: '100%',
  }
 
});

export default Auth;