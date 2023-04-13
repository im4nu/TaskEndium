import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import { ImageBackground, requireNativeComponent } from 'react-native';
import { background } from '../../utils/images';
import { TaskCard } from '../../components/TasksCards';

export function Unicas() {
  return (
    <ImageBackground
      source={background}
      alt="Background"
      resizeMode={'cover'}
      style={{ flex: 1 }}
    >
      <VStack flex={1} bg={'#FF003D35'}>
        <ScrollView>
        <VStack flex={1} justifyContent={'flex-start'} textAlign={'center'} px={8} paddingTop={10}>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>

          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FF003D'></TaskCard>
          </HStack>
        </VStack>
        </ScrollView>
      </VStack>
    </ImageBackground>
  );
}
