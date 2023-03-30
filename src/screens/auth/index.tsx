import { Text, VStack, Button, View, Flex} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native';
import { background } from '../../utils/background';
import { ButtonGoogle } from '../../components/login/ButtonGoogle';
import { CardExplore } from '../../components/home/CardExplore'; 
 


export function Auth() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={background} style= {{flex: 1,}}>
       <VStack style= {{padding: 18,}}>

        <View style = {styles.textLogin}>
          <Text style = {{fontSize: 40,  paddingTop:82,}}>Bem vindo ao</Text>
          <Text style = {{fontSize: 54,  paddingTop:30, fontWeight: 'bold',}}>Taskendium</Text>
        </View>

        <CardExplore titulo='Explore' info='wefwefwef' textbutton='Saiba mais'></CardExplore>
        
        <ButtonGoogle></ButtonGoogle>
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