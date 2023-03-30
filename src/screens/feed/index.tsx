import { Text, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import { background } from '../../utils/images';

export function Feed() {
  return (
    <ImageBackground
      source={background}
      alt="Background"
      resizeMode={'cover'}
      style={{ flex: 1 }}
    >
      <VStack flex={1} bg={'#22222295'}>
        <VStack flex={1} justifyContent={'center'} textAlign={'center'} px={8}>
          <Text>Bem vindo ao Feed!</Text>
        </VStack>
      </VStack>
    </ImageBackground>
  );
}
