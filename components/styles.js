/* 
 *  Styles...
 *  "With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camelCase."
 *  https://reactnative.dev/docs/style
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  appButtons: {
    alignItems: 'center',
    flex: 1/3,
  },
  appContainer: {
    alignItems: 'center',
    backgroundColor: '#2c4a1e',  // NPS Green
    // backgroundColor: '#c56c39',  // NPS Orange
    flex: 1,
    justifyContent: 'center',
  },
  appStickers: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  appStickersModal: {
    bottom: 80,
    position: 'absolute',
  },
  appText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    paddingTop: 15,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 40,
  },
  mobileButton: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  mobileButtonContainer: {
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderColor: "#ffff00",
    borderRadius: 20,
    borderWidth: 4,
    height: 50,
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    width: 300,
  },
  mobileButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  mobileImage: {
    borderRadius: 50,
    height: 320,
    width: 320,
  },
  pickerContainer: {
    alignItems: 'center',
    backgroundColor: '#99532b',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  pickerContent: {
    backgroundColor: '#8eae7f',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    height: '25%',
    position: 'absolute',
    width: '100%',
  },
  pickerText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 4,
  },
  pickerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sticker: {
    height: 100,
    marginRight: 20,
    width: 100,
  },
  stickersButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 40,
    flex: 1,
    justifyContent: 'center',
  },
  stickersButtonContainer: {
    borderColor: '#ffff00',
    borderRadius: 40,
    borderWidth: 4,
    height: 80,
    margin: 60,
    padding: 4,
    width: 80,
  },
  stickersButtonText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stickersContainer: {
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

});

export default styles;
