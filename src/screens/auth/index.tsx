import { Text, VStack, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native';

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
      <Text color={'black'}>Bem vindo ao TaskEndium</Text>
      <Button onPress={() => navigation.navigate('Tabs')}>
        <Text>Login</Text>
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default Auth;
