import { Image } from 'react-native';
import styles from "./styles";

// The default original Mobile Image on the Home Screen.

export default function MobileImage({ imageName, chosenPhoto }) {

  console.log("MobileImage.js imageName = ", imageName);
  console.log("MobileImage.js chosenPhoto = ", chosenPhoto);

  let imageSource;

  if (chosenPhoto) {

    // If a new photo was chosen.
    imageSource = { uri: chosenPhoto }; // (1) These are different, this is a Binary String when choosing a new photo from a mobile device or from a computer.

  } else {

    // If not, then use the original default image (Lincoln's Birthplace photo).
    imageSource = imageName; // (2) These are different, this is just a normal Image File as a standard local asset.

  }

  return (
    <Image source={ imageSource } style={styles.mobileImage} />
  );

}
