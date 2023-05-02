import { useState } from 'react';
import { FlatList, Image, Platform, Pressable } from 'react-native';
import styles from "./styles";

export default function StickersList({ onPick, onClose }) {

  // https://creativecommons.org/licenses/by-sa/4.0/
  // https://openmoji.org/

  const [stickers] = useState([
    require('../assets/images/applause.png'),
    require('../assets/images/beach.png'),
    require('../assets/images/cake.png'),
    require('../assets/images/cat.png'),
    require('../assets/images/dog.png'),
    require('../assets/images/flower.png'),
    require('../assets/images/gradfemale.png'),
    require('../assets/images/gradmale.png'),
    require('../assets/images/heart.png'),
    require('../assets/images/hundred.png'),
    require('../assets/images/lincolnhat.png'),
    require('../assets/images/prayer.png'),
    require('../assets/images/smiley.png'),
    require('../assets/images/star.png'),
    require('../assets/images/wine.png'),
  ]);

  // FlatList is a component to enable Smooth Scrolling with good performance and helpful additional properties. Can be vertical or horizontal.
  // We will show a scrollbar ("showsHorizontalScrollIndicator") if we're on the Web with a mouse and not show a scrollbar if we're on Mobile and can use our fingers / touch.
  // Also, the renderItem property - "Takes an item from data and renders it into the list. Provides additional metadata like index if you need it."
  // https://reactnative.dev/docs/flatlist

  return (
    
    <FlatList
      horizontal
      showsHorizontalScrollIndicator = {Platform.OS === 'web' ? true : false}
      contentContainerStyle = {styles.stickersContainer}
      data = {stickers}

      renderItem = { function({ item, index }) {
        return (
          <Pressable
            onPress={ function() {
              onPick(item);
              onClose();
            }}>
            <Image source={item} key={index} style={styles.sticker} />
          </Pressable>
        );
      }}

    />    
  );
}
