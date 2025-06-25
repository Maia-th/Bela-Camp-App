import "../styles/global.css";
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
}
