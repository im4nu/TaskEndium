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

  const habitosData = [
    { title: 'Dentista', day: 17, month: 'Fev' },
    { title: 'Comprar Pão', day: 19, month: 'Fev' },
    { title: 'Ligar para Manu', day: 21, month: 'Fev' },
    { title: 'Dentista', day: 17, month: 'Fev' },
    { title: 'Comprar Pão', day: 19, month: 'Fev' },
    { title: 'Ligar para Manu', day: 21, month: 'Fev' },
  ];

  const metasData = [
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
        <ScrollView>
          <Heading textAlign={'center'} size="2xl">
            Taskendium
          </Heading>

          {/* 'Únicas' block */}
          <VStack>
            <VStack px={8}>
              <Heading fontSize={'3xl'}>Únicas</Heading>
              <HStack pt={2}>
                <Text fontWeight={'regular'} fontSize={'sm'}>
                  Atividades para planejamento de conclusão
                </Text>
                <Text px={1} bold color="#FF003D" fontSize={'sm'}>
                  única
                </Text>
              </HStack>
              {/* <Text>Placeholder - Activities Blockage</Text> */}
            </VStack>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: 'row', paddingStart: 8 }}
              pt={2}
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
          <VStack pl={8}>
            <Heading fontSize={'3xl'}>Hábitos</Heading>
            <Text fontWeight={'regular'} fontSize={'sm'} pt={2}>
              Atividades para planejamento de conclusão
            </Text>
            <Text bold color="#FFC700" fontSize={'sm'}>
              repetida e de tempo
            </Text>
            {/*Task Blockage*/}
          </VStack>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingStart: 8 }}
            pt={2}
          >
            {habitosData.map((item, index) => (
              <TaskCard
                key={index}
                BoxColor="#FFC700"
                Day={item.day}
                Month={item.month}
                Title={item.title}
              />
            ))}
          </ScrollView>

          {/* 'Hábitos' block */}
          <VStack pl={8}>
            <Heading fontSize={'3xl'}>Metas</Heading>
            <Text fontWeight={'regular'} fontSize={'sm'} pt={2}>
              Conjunto de atividades feitas para atingir um
            </Text>

            <Text bold fontSize={'sm'} color="#0087FF">
              objetivo a longo prazo
            </Text>
            {/*Task Blockage*/}
          </VStack>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingStart: 8 }}
            pt={2}
          >
            {habitosData.map((item, index) => (
              <TaskCard
                key={index}
                BoxColor="#0087FF"
                Day={item.day}
                Month={item.month}
                Title={item.title}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </VStack>
    </ImageBackground>
  );
}
