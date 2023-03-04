import {  Text, VStack } from 'native-base';
import {MainButton} from '../../components/Button'
import { MainCard } from '../../components/Card';



export function Home() {
  return (
    <VStack
      flex={1}
      bg={'green.200'}
      justifyContent={'center'}
      textAlign={'center'}
      alignItems={'center'}
      px={8}
    >
      <Text color={'black'}>Bem vindo a Home</Text>
      <MainButton title='Botão do Eduardo' />

      <MainButton title='Botão do Emmanuel' />

      <MainCard  title='Card do lorran'/>
      
    </VStack>
   
  );
}
