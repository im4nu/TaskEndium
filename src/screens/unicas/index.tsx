import { Text, View, VStack } from 'native-base';
import { ImageBackground, requireNativeComponent } from 'react-native';
import { background } from '../../utils/images';

export function Unicas() {
  return (
    <ImageBackground
      source={background}
      alt="Background"
      resizeMode={'cover'}
      style={{ flex: 1 }}
    >
      <VStack flex={1} bg={'#FF003D35'}>
        <VStack flex={1} justifyContent={'center'} textAlign={'center'} px={8}>
          <Text>Bem vindo à tela de atividades Unicas</Text>
        </VStack>
      </VStack>
    </ImageBackground>
  );
}
