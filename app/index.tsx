import { Text, View } from 'react-native';
import { Activity } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center bg-white mt-56">
      <Activity color="#4f46e5" size={58} />
      <Text className="text-xl font-bold text-blue-900 mt-5">Bem-vindo ao Bela Camp App!</Text>
    </View>
  );
}
