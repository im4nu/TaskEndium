import { extendTheme, NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const theme = extendTheme({
    colors: {
      primaryDefault: {
        100: '#523F30',
        200: '#957A67',
      },
      primaryLight: {
        100: '#CFCECC',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar />
      <Routes />
    </NativeBaseProvider>
  );
}
