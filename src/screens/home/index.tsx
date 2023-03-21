import { Heading, HStack, ScrollView, Stack, Text, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import { TaskCard } from '../../components/TasksCards';
import { background } from '../../utils/images';

export function Home() {
  const unicasData = [
    { title: 'Dentista', day: 17, month: 'Fev' },
    { title: 'Comprar Pão', day: 19, month: 'Fev' },
    { title: 'Ligar para Manu', day: 21, month: 'Fev' },
    { title: 'Dentista', day: 17, month: 'Fev' },
    { title: 'Comprar Pão', day: 19, month: 'Fev' },
    { title: 'Ligar para Manu', day: 21, month: 'Fev' },
  ];
  return (
    <ImageBackground
      source={background}
      resizeMode={'cover'}
      style={{ flex: 1 }}
    >
      <VStack flex={1} bg={'#22222295'} justifyContent={'space-around'}>
        <Heading textAlign={'center'} size="2xl">
          Taskendium
        </Heading>

        {/* 'Únicas' block */}
        <VStack>
          <VStack px={8}>
            <Heading>Únicas</Heading>
            <HStack>
              <Text fontWeight={'light'} fontSize={'xs'}>
                Atividades para planejamento de conclusão
              </Text>
              <Text px={1} bold color="#FF003D" fontSize={'xs'}>
                única
              </Text>
            </HStack>
            {/* <Text>Placeholder - Activities Blockage</Text> */}
          </VStack>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingStart: 8 }}
          >
            {unicasData.map((item, index) => (
              <TaskCard
                key={index}
                BoxColor="#FF003D"
                Day={item.day}
                Month={item.month}
                Title={item.title}
              />
            ))}
          </ScrollView>
        </VStack>

        {/* 'Hábitos' block */}
        <VStack pl={8} w={'2/3'}>
          <Heading>Hábitos</Heading>
          <Text fontWeight={'light'} fontSize={'xs'}>
            Atividades para planejamento de conclusão
          </Text>
          <Text bold color="#FFC700" fontSize={'xs'}>
            repetida e de tempo
          </Text>
          {/* <Text>Placeholder - Activities Blockage</Text> */}
        </VStack>

        {/* 'Metas' block */}
        <VStack px={8}>
          <Heading>Metas</Heading>
          <Text fontWeight={'light'} fontSize={'xs'}>
            Conjunto de atividades feitas para atingir um
          </Text>

          <Text bold fontSize={'xs'} color="#0087FF">
            objetivo a longo prazo
          </Text>
          {/* <Text>Placeholder - Activities Blockage</Text> */}
        </VStack>
      </VStack>
    </ImageBackground>
  );
}
