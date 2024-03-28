import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 340,
    maxHeight: 140,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 120,
    columnGap: 12,
    borderRadius: 8
  },

  contentImage: { flex: 1, maxWidth: 85, justifyContent: 'center', marginLeft: 8 },
  imageProduct: { width: '100%', height: '70%', borderRadius: 100 }
})
