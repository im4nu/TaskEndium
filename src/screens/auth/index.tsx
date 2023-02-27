import { Text, VStack, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export function Auth() {
  const navigation = useNavigation();
  return (
    <VStack
      flex={1}
      bg={'red.200'}
      justifyContent={'center'}
      textAlign={'center'}
      px={8}
    >
      <Text>Bem vindo ao TaskEndium</Text>
      <Button onPress={() => navigation.navigate('Tabs')}>
        <Text>Login</Text>
      </Button>
    </VStack>
  );
}
