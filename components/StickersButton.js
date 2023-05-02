import { Pressable, Text, View } from 'react-native';
import styles from "./styles";

export default function StickersButton({ onPress }) {
  return (
    <View style={styles.stickersButtonContainer}>
      <Pressable style={styles.stickersButton} onPress={onPress}>
        <Text style={styles.stickersButtonText}> + </Text>
      </Pressable>
    </View>
  );
}
