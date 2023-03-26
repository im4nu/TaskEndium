import { Text, VStack, Button, View } from 'native-base';
import { ImageBackground } from 'react-native';
import { background } from '../../utils/background';

export function Habitos() {
  return (
    <ImageBackground 
    source={background} 
    alt="Background"
    resizeMode={"cover"}
    style={{ flex:1 }}> 
      <VStack
      flex={1}
      bg={'#FFC70035'}>   
        <VStack
          flex={1}
          justifyContent={'center'}
          textAlign={'center'}
          px={8}
        >
          <Text>Bem vindo à tela Hábitos</Text>
        </VStack>
      </VStack>
    </ImageBackground>
  );
}