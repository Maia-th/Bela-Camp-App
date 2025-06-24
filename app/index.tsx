import { Text, View } from 'react-native';
import { Activity } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500 mt-40">
      <Activity color="#4f46e5" size={58} />
      <Text className="text-xl font-bold mt-4">Bem-vindo ao Bela Camp App!</Text>
    </View>
  );
}
