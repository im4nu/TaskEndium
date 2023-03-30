import { Flex, Text, View, VStack } from 'native-base';

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
          <Text position={'absolute'} pt={'3px'} pr={'15px'} bold color={'#222222'}>{Month}</Text>
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
