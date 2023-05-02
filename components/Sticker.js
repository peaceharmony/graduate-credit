import { Image, View } from 'react-native';

// Where to place the sticker on the image (coordinates relative to the image), also the size of the image and the file name of the chosen sticker.

export default function Sticker({ imageSize, stickerSource }) {

  console.log("Sticker.js imageSize = ", imageSize);
  console.log("Sticker.js stickerSource = ", stickerSource);

  return (
    <View style = {{ top: -120, left: 190 }}>
      <Image
        resizeMode = "contain"
        source = { stickerSource }
        style = {{ width: imageSize, height: imageSize }}
      />
    </View>
  );

}
