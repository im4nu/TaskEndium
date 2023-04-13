import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import { background } from '../../utils/images';
import { TaskCard } from '../../components/TasksCards';

export function Habitos() {
  return (
    <ImageBackground
      source={background}
      alt="Background"
      resizeMode={'cover'}
      style={{ flex: 1 }}
    >
     <VStack flex={1} bg={'#FFC70035'}>
        <ScrollView>
        <VStack flex={1} justifyContent={'flex-start'} textAlign={'center'} px={8} paddingTop={10}>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>

          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          <HStack>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
            <TaskCard Month='Fev' Day={17} Title='Dentista' BoxColor='#FFC700'></TaskCard>
          </HStack>
          
        </VStack>
        </ScrollView>
      </VStack>
    </ImageBackground>
  );
}