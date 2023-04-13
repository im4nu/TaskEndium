import { Text, VStack, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

export function FloatHome() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <VStack flex={1} bg={'#22222295'}>

      <VStack padding= {18} >
        <View alignItems= {'flex-start'} justifyContent= {'space-between'} width= {'90%'}>
          <Text  fontSize= {40} paddingTop= {82}>Bem vindo ao</Text>
          <Text fontSize= {54} paddingTop= {1} fontWeight= {'bold'}>
            Taskendium
          </Text>
        </View>

        <View alignItems={'center'} paddingTop={150}>
        </View>

      </VStack>
      </VStack>
    </View>
  );
}

export default FloatHome;