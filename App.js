import { useState } from 'react';
import { Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import MobileButton from './components/MobileButton';
import MobileImage from './components/MobileImage';
import Sticker from './components/Sticker';
import StickerPicker from "./components/StickerPicker";
import StickersButton from './components/StickersButton';
import StickersList from './components/StickersList';
import styles from "./components/styles";

// Credits & Attribution - This project is derived from and built upon the foundation provided by the documentation at Expo (https://expo.dev/) and React Native (https://reactnative.dev/).  In a very granular fashion, learning step by step upon every detail, the coding here is a modification and customization of examples from the documentation provided.  Furthermore, a special thank you to Expo for their high quality Cloud Product and Service.

const lincolnBirthplace = require('./assets/images/lincolnbirthplace.jpg');
// const lincolnBirthplace = require('./assets/images/lincolncabin.jpg');

export default function App() {

  console.log("Now inside export default function App()");

  // *** Set App State ***

  // https://react.dev/reference/react/useState
  // const [stateVariable, setStateVariable] = useState(initialState);
  
  const [addStickers, setAddStickers] = useState(false);
  const [chosenPhoto, setChosenPhoto] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [pickedSticker, setPickedSticker] = useState(null);

  // *** Use Original Photo ***
  const chooseOriginalPhoto = function() {
    console.log("Adding Stickers to original image, Lincoln's Birthplace.")
    setAddStickers(true);
  };

  // *** Choose A New Photo ***

  const chooseNewPhoto = async function() {
    console.log("Now inside const chooseNewPhoto = async function()");

    // Returns an Image and its Properties.
    let imageAndProperties = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // When set to true, the user can crop & edit the chosen photo on Android & iOS mobile phones.
      quality: 1,
    });

    if (!imageAndProperties.canceled) {
      console.log("The chosen photo's image properties, imageAndProperties = ", imageAndProperties);

      // Only one image at a time is chosen, so therefore we need just the first element [0] of the assets array.
      // The uri property is the Base64 encoding of the binary data of the image.
      setChosenPhoto(imageAndProperties.assets[0].uri);

      setAddStickers(true);
    } else {
      alert('Please select an image.');
    }

  };

  const onAddSticker = function() {
    console.log("Now inside const onAddSticker = function()");
    setIsPickerVisible(true);
  };

  const onPickerClose = function() {
    console.log("Now inside const onPickerClose = function()");
    setIsPickerVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appText}>Park Pictures App</Text>

      {/* <View> is a lot like <div> on the Web. */}
      <View style={styles.imageContainer}>

        {/* React Native Components map to (later become actual) Android and iOS Mobile Components! 
          * For example, <MobileImage> is a custom component that will later become <UIImageView> on iOS and <ImageView> on Android. 
          * Other types of component mappings can be found here... https://reactnative.dev/docs/intro-react-native-components */}

        <MobileImage imageName={lincolnBirthplace} chosenPhoto={chosenPhoto} />

        { console.log("pickedSticker = ", pickedSticker) }
        { pickedSticker !== null ? (<Sticker imageSize={120} stickerSource={pickedSticker} />) : null}
        
      </View>

      {/* We must use a Ternary Conditional Operator in JSX, we can't use a traditional If/Then */}
      { addStickers ? (
        <View style={styles.appStickersModal}>
          <View style={styles.appStickers}>
            <StickersButton onPress={onAddSticker} />
          </View>
        </View>
      ) : (
        <View style={styles.appButtons}>
          <MobileButton buttonText="Use This Photo" onPress={chooseOriginalPhoto} />
          {/* Passing our chooseNewPhoto function to the onPress property of Pressable... https://reactnative.dev/docs/pressable#onpress */}
          <MobileButton buttonText="Choose A New Photo" onPress={chooseNewPhoto} />
        </View>
      )}
      <StickerPicker isVisible={isPickerVisible} onClose={onPickerClose}>
        <StickersList onPick={setPickedSticker} onClose={onPickerClose} />
      </StickerPicker>
      <StatusBar style="auto" />
    </View>
  );
}
