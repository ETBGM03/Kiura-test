import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: 'space-between' },
  contentImage: { width: '100%', height: 240 },
  image: { width: '100%', height: '100%' },
  title: { fontSize: 28, fontWeight: '400' },
  subtitle: { fontSize: 16, fontWeight: '300' },
  footer: { alignItems: 'center', rowGap: 12, marginBottom: 12 },
  btnAddCar: {
    width: '90%',
    height: 54,
    justifyContent: 'center',
    backgroundColor: '#b3cbe3',
    borderRadius: 8
  },
  textAddCar: { textAlign: 'center', fontSize: 16 }
})
