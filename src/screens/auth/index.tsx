import { Text, VStack, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native';
import { background } from '../../utils/images';
import { ButtonGoogle } from './components/ButtonGoogle';

export function Auth() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={background} alt={"image background"}  style={{ flex: 1 }}>
      <VStack flex={1} bg={'#22222295'}>

      <VStack padding= {18} >
        <View alignItems= {'flex-start'} justifyContent= {'space-between'} width= {'90%'}>
          <Text  fontSize= {40} paddingTop= {82}>Bem vindo ao</Text>
          <Text fontSize= {54} paddingTop= {1} fontWeight= {'bold'}>
            Taskendium
          </Text>
        </View>

        <View alignItems={'center'} paddingTop={150}>
          <ButtonGoogle />
        </View>

      </VStack>
      </VStack>
    </ImageBackground>
  );
}

export default Auth;
