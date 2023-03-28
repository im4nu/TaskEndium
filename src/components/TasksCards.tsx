import { Flex, Text, View, VStack } from 'native-base';
import {Text as Text2 } from 'react-native';

interface TaskCardProps {
  Month: string;
  Day: number;
  Title: string;
  BoxColor: string;
}

export function TaskCard({ Month, Day, Title, BoxColor }: TaskCardProps) {
  return (
    <VStack px={2}>
      <VStack
        rounded={'2xl'}
        w={100}
        h={100}
        bg={BoxColor}
        justifyContent={'center'}
      >
        <Flex direction={'row-reverse'}>
          <Text2 style={{position: 'absolute', paddingTop: 3, paddingRight: 15, fontWeight: 'bold', color: '#222222'}}>{Month}</Text2>
        </Flex>

        <View alignItems={'center'}>
          <Text bold color={'#222222'} fontSize={'6xl'}>{Day}</Text>
        </View>
      </VStack>

      <Text
      bold
      fontSize={'md'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      maxW={'100'}
      paddingTop={'1'}>{Title}</Text>
    </VStack>
  );
}
