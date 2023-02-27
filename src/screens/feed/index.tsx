import { Text, VStack } from 'native-base';

export function Feed() {
  return (
    <VStack
      flex={1}
      bg={'yellow.200'}
      justifyContent={'center'}
      textAlign={'center'}
      px={8}
    >
      <Text>Bem vindo a Home</Text>
    </VStack>
  );
}
