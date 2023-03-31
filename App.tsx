import { extendTheme, NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const theme = extendTheme({
    colors: {
      main: {
        100: '#3797EF',
      },
      dark: {
        100: '#262626',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Routes />
    </NativeBaseProvider>
  );
}
