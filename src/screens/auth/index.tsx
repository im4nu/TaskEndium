import { Text, VStack, Button, View, Flex} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native';
import { background } from '../../utils/background';



export function Auth() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={background} style= {{flex: 1,}}>
       <VStack style= {{padding: 18,}}>

        <View style = {styles.textLogin}>
          <Text style = {{fontSize: 40,  paddingTop:82,}}>Bem vindo ao</Text>
          <Text style = {{fontSize: 54,  paddingTop:30, fontWeight: 'bold',}}>Taskendium</Text>
        </View>

        <View style= {{alignItems: 'center', paddingTop: 140}}>  
          <Button style={styles.button}>
          <Text style={{color: 'black'}}>
              Email
            </Text>
          </Button>

          <Button style={styles.button}>
            <Text style={{color: 'black'}}>
              Senha
            </Text>
          </Button>

          <Button onPress={() => navigation.navigate('Tabs')}>
            <Text>Login</Text>
          </Button>
        </View>

       </VStack>

    </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  textLogin: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '90%'
  },
  button: {
    width: '95%',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    height: 60, 
    backgroundColor: 'white',
    color: 'black'
  },
  entrar: {
    width: '60%',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 40,
    height: 60, 
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    borderWidth: 7
  }
  }
 
);

export default Auth;