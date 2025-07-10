import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen() {
  return (
    <StyledView className="flex-1 justify-center items-center bg-white">
      <StyledText className="text-lg font-bold text-black">
        Welcome to Amede Gebeya
      </StyledText>
    </StyledView>
  );
}