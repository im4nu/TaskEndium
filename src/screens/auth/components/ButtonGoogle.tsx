import { HStack, Text, Image } from 'native-base';
import {} from 'react-native';
import GoogleIcon from '../../../assets/images/google.png';

export function ButtonGoogle() {
  return (
    <HStack
      backgroundColor={'#D9D9D9'}
      height={10}
      width={'78%'}
      alignItems={'center'}
      borderRadius={9}
      justifyContent={'center'}
    >
      <Image source={GoogleIcon} />
      <Text
        paddingLeft={4}
        fontSize={20}
        color={'#5A5A5A'}
        fontWeight={'semibold'}
      >
        Continuar com Google
      </Text>
    </HStack>
  );
}
