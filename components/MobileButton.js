import { Pressable, Text, View } from 'react-native';
import styles from "./styles";

// Pressable is a Core Component wrapper that can detect various kinds of different press interactions.
// https://reactnative.dev/docs/pressable

// The Mobile Buttons on the Home Screen.

export default function MobileButton({ buttonText, onPress }) {

  console.log("MobileButton.js buttonText = ", buttonText);
  console.log("MobileButton.js onPress = ", onPress);

  return (
    <View style={styles.mobileButtonContainer}>
      <Pressable style={styles.mobileButton} onPress={onPress}>
        <Text style={styles.mobileButtonText}>{ buttonText }</Text>
      </Pressable>
    </View>
  );

}
