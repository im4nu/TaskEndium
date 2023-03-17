import {  Text, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import {MainButton} from '../../components/Button'
import { MainCard } from '../../components/Card';
import { background } from '../../utils/images';



export function Home() {
  return (
    <ImageBackground 
    source={background} 
    alt="Background"
    resizeMode={"cover"}
    style={{ flex:1 }}>
      <VStack
      flex={1}
      bg={'#22222275'}>
        <VStack
          flex={1}
          justifyContent={'center'}
          textAlign={'center'}
          alignItems={'center'}
          px={8}
        >
          <Text color={'white'}>Bem vindo a Home</Text>
          <MainButton title='Botão do Eduardo' />

          <MainButton title='Botão do Emmanuel' />

          <MainCard  title='Card do lorran'/>
          
        </VStack>
      </VStack> 
    </ImageBackground>
   
  );
}
