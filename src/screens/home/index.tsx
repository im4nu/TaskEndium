import {  Heading, HStack, Text, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import {MainButton} from '../../components/Button'
import { MainCard } from '../../components/Card';
import { background } from '../../utils/images';

//old
/* <VStack
          flex={1}
          justifyContent={'center'}
          textAlign={'center'}
          alignItems={'center'}
          px={8}
        >
          <Text color={'white'}>Bem vindo a Home</Text>
          <MainButton title='Botão do Eduardo' />

          <MainButton title='Botão do Emmanuel' />

          <MainCard  title='Card do lorran'/>
          
        </VStack>
        
        */
        


export function Home() {
  return (
    <ImageBackground 
    source={background} 
    alt="Background"
    resizeMode={"cover"}
    style={{ flex:1 }}>
      <VStack
      flex={1}
      bg={'#22222295'}
      justifyContent={'center'}
      textAlign={'center'}
      >
        <VStack
          flex={1}
          textAlign={'center'}
          px={8}
        >
          <Heading
          textAlign={'center'}
          size="2xl"
          paddingTop={25}
          paddingBottom={10}
          >
            Taskendium
          </Heading>
          {/* Screen Content */}
          <VStack>
            {/* 'Únicas' block */}
            <VStack
            paddingBottom={5}>
              <Heading
              paddingBottom={2}>
              Únicas
              </Heading>
              <HStack
              space={1}
              paddingBottom={2}
              >
                <Text fontWeight={'light'}>
                  Atividades 
                </Text>
                <Text bold color="#FF003D"> 
                  únicas
                </Text>
                <Text fontWeight={'light'}>
                  para planejamento
                </Text>
              </HStack>
              <Text>            
              Placeholder - Activities Blockage
              </Text>
            </VStack>

            {/* 'Hábitos' block */}
            <VStack
            paddingBottom={5}>
              <Heading
              paddingBottom={2}>
              Hábitos
              </Heading>
              <HStack
              space={1}
              paddingBottom={2}
              pr={8}
              >
                <Text fontWeight={'light'}>
                  Atividades que contém
                </Text>
                <Text bold color="#FFC700"> 
                  quantas vezes foi concluída
                </Text>
                <Text fontWeight={'light'}>
                  e
                </Text>
                <Text bold color="#FFC700"> 
                  tempo gasto
                </Text>
                <Text fontWeight={'light'}>
                  nela
                </Text>
              </HStack>
              <Text>            
              Placeholder - Activities Blockage
              </Text>
            </VStack>

            {/* 'Metas' block */}
            <VStack>
              <Heading
              paddingBottom={2}>
              Metas
              </Heading>
              <HStack
              space={1}
              paddingBottom={2}
              >
                <Text fontWeight={'light'}>
                  Atividades 
                </Text>
                <Text bold color="#0087FF"> 
                  únicas
                </Text>
                <Text fontWeight={'light'}>
                  para planejamento
                </Text>
              </HStack>
              <Text>            
              Placeholder - Activities Blockage
              </Text>
            </VStack>
          </VStack>  
        </VStack>      
      </VStack> 
    </ImageBackground>
   
  );
}
