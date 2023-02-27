import { Text, VStack, Button } from 'native-base';

export function Settings() {
  return (
    <VStack
      flex={1}
      bg={'blue.200'}
      justifyContent={'center'}
      textAlign={'center'}
      px={8}
    >
      <Text>Bem vindo a tela settings</Text>
    </VStack>
  );
}
