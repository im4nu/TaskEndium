import { Text, View, VStack } from 'native-base';
import { ImageBackground, requireNativeComponent } from 'react-native';
import { background } from '../../utils/background';

export function Metas() {
  return (
    <ImageBackground 
    source={background} 
    alt="Background"
    resizeMode={"cover"}
    style={{ flex:1 }}> 
      <VStack
      flex={1}
      bg={'#0087FF35'}>   
        <VStack
          flex={1}
          justifyContent={'center'}
          textAlign={'center'}
          px={8}
        >
          <Text>Bem vindo à tela de Metas</Text>
        </VStack>
      </VStack>
    </ImageBackground>
  );
}
