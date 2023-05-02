import { Modal, Pressable, Text, View } from 'react-native';
import styles from "./styles";

// Modal is a pop up panel in a mobile friendly way.
// https://reactnative.dev/docs/modal

// This is the overlay pop up panel that appears at the bottom of the screen showing the available stickers to choose from.
// The children parameter (which is the StickersList in this case) is simply the {destructuring assignment} of React's "props.children" (which are any and all sub elements) that are wrapped by the StickerPicker component.

export default function StickerPicker({ isVisible, onClose, children }) {

  console.log("StickerPicker.js isVisible = ", isVisible);
  console.log("StickerPicker.js onClose = ", onClose);
  console.log("StickerPicker.js children = ", children);

  return (

    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.pickerContent}>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerTitle}>Choose a Sticker</Text>
          <Pressable onPress={onClose}>
            <Text style={styles.pickerText}> X </Text>
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
    
  );
}
