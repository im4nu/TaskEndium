import { Text, VStack } from 'native-base';

interface TaskCardProps {
  Month: string;
  Day: number;
  Title: string;
  BoxColor: string;
}

export function TaskCard({ Month, Day, Title, BoxColor }: TaskCardProps) {
  return (
    <VStack px={3}>
      <VStack
        rounded={'2xl'}
        w={100}
        h={100}
        bg={BoxColor}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>{Month}</Text>
        <Text>{Day}</Text>
      </VStack>

      <Text>{Title}</Text>
    </VStack>
  );
}
