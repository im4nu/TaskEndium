import { View, Text, VStack, Button, Toast } from 'native-base';

export function Home() {
  return (
    <VStack
      flex={1}
      bg={'green.200'}
      justifyContent={'center'}
      textAlign={'center'}
      alignItems={'center'}
      px={8}
    >
      <Text>Bem vindo a Home</Text>

      <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Button  
        variant="subtle" 
        justifyContent={'center'}
        textAlign={'center'} 
        key={50} 
        size={130}
        colorScheme="secondary" 
        onPress={() => Toast.show({
          description: "Pop-up do Eduardo"
        })}> 
        Botão do Eduardo
        </Button>
      </View>

    </VStack>
  );
}
