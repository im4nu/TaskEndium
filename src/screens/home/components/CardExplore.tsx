import { View, HStack, VStack, Text, Image,} from 'native-base';
import { TouchableOpacity } from 'react-native';
import image from "../../../assets/images/img.png"
import { useNavigation } from '@react-navigation/native';

interface CardProps {
  titulo: string;
  info: string;
  textbutton: string;
}

export function CardExplore({titulo, info, textbutton }: CardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Floathome')}>
    <View width={'100%'}>
      <HStack background={'#D2D2D2'} 
      borderRadius={12} 
      marginTop={4} 
      alignItems={'center'} 
      justifyContent={'center'}
      >
          <VStack padding={3} flex={3}>
          <Text fontSize={30} color={'#222222'} >{titulo}</Text>
          <Text width={'90%'} fontSize={14} paddingY={2} color={'#222222'}>{info}</Text>
          <View
            borderColor={'black'}
            borderWidth={4}
            borderRadius={4}
            alignItems={'center'}
            justifyContent={'center'}
            width={'70%'}
            marginTop= {2}
          >
            <Text fontSize={18} padding={1} color={'#222222'}>{textbutton}</Text>
          </View>
        </VStack>

        <VStack alignContent={'center'} justifyContent={'center'} flex={2}>
          <Image source={image} alt= {'icone button'} height={200} borderRightRadius={11}/>
        </VStack>
      </HStack>
    </View>
    </TouchableOpacity>
  );
}
