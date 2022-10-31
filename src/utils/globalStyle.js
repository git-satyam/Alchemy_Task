

const {StyleSheet,Dimensions} = require('react-native');
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  absContainer: {
    position: 'absolute',
  },
  relContainer: {
    position: 'relative',
  },
  bgImg: {
    maxHeight: height,
    maxWidth: width,
    bottom: '-12%',
    justifyContent: 'flex-end',
  },

  vhCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  danger: {
    
    color: 'red',
  },
  barGrey: {
    // marginVertical: 5,
    height: 5,
    width: 40,
    backgroundColor: '#EAEAEA',
    borderRadius: 24,
    alignSelf: 'center',
  },
  inputTitle: {
    color: 'red',
    marginTop: 10,
    fontSize: 12,
  },
  textRed: {
    color: 'red',
  },
  infoListItemConatiner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 13,
    shadowColor: '#ffffff',
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 10,
  },
  appBg: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  chatContainer:{
    backgroundColor: '#bfbfbf',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#bfbfbf',
    marginVertical: 10,
    marginHorizontal: 20,
  }
});
