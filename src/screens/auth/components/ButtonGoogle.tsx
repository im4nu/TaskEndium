import { HStack, Text, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import GoogleIcon from '../../../assets/images/google.png';
import { useNavigation } from '@react-navigation/native';

export function ButtonGoogle() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
      <HStack
        backgroundColor={'#D9D9D9'}
        height={10}
        width={'78%'}
        alignItems={'center'}
        borderRadius={9}
        justifyContent={'center'}
      >
        <Image alt="Logomarca do google" source={GoogleIcon} />
        <Text
          paddingLeft={4}
          fontSize={20}
          color={'#5A5A5A'}
          fontWeight={'semibold'}
        >
          Continuar com Google
        </Text>
      </HStack>
    </TouchableOpacity>
  );
}
