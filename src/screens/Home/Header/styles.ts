import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerCategory: {
    borderRadius: 6,
    maxHeight: 50,
    paddingVertical: 6,
    paddingHorizontal: 16
  },
  contentCategory: {
    marginVertical: 12, height: 80
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  spacerTop: { marginTop: 20 },
  textCategory: {
    color: '#000',
    fontWeight: '400',
    textTransform: 'capitalize',
    alignSelf: 'flex-start',
    borderRadius: 12
  },
  titleSection: { fontWeight: '500' },
  inputSearch: {
    height: 28,
    flex: 1,
    fontSize: 16,
    marginVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 8
  },
  containerSearch: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12
  },
  shopping: { alignItems: 'center', flex: 1, maxWidth: 60 },
  contentContainerStyle: { columnGap: 20, alignSelf: 'center' }
})
