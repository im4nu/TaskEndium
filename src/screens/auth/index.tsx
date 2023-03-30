import { Text, VStack, View } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';
import { background } from '../../utils/images';
import { ButtonGoogle } from './components/ButtonGoogle';

export function Auth() {
  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <VStack style={{ padding: 18 }}>
        <View style={styles.textLogin}>
          <Text style={{ fontSize: 40, paddingTop: 82 }}>Bem vindo ao</Text>
          <Text style={{ fontSize: 54, paddingTop: 30, fontWeight: 'bold' }}>
            Taskendium
          </Text>
        </View>

        <ButtonGoogle />
      </VStack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textLogin: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default Auth;
