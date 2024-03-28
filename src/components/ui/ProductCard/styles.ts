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
  textCategory: {
    color: '#fff',
    fontWeight: '600',
    backgroundColor: 'green',
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 6
  },
  contentImage: { flex: 1, maxWidth: 85, justifyContent: 'center', marginLeft: 8 },
  imageProduct: { width: '100%', height: '70%', borderRadius: 100 },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    maxWidth: '60%',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonQuantity: {
    width: 26,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#b3cbe3'
  },
  buttonTextQuantity: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  quantityText: {
    fontSize: 18
  }
})
