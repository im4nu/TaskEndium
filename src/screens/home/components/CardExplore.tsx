import { View, HStack, VStack, Text, Image } from 'native-base';
import GoogleIcon from '../../../assets/images/google.png';

interface ExploreProps {
  titulo: string;
  info: string;
  textbutton: string;
}

export function CardExplore({ titulo, info, textbutton }: ExploreProps) {
  return (
    <View width={'100%'}>
      <HStack>
        <VStack>
          <Text>{titulo}</Text>
          <Text>{info}</Text>
          <View
            borderColor={'black'}
            borderWidth={4}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text>{textbutton} </Text>
          </View>
        </VStack>

        <VStack>
          <Image source={GoogleIcon} />
        </VStack>
      </HStack>
    </View>
  );
}
