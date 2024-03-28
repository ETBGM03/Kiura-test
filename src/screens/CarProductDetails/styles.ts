import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { flex: 1, justifyContent: 'flex-start' },
  title: { fontSize: 24, textAlign: 'center', fontWeight: '600' },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2
  },
  textInfo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400'
  },
  contentCarEmpty: {
    paddingHorizontal: 12,
    alignItems: 'center',
    rowGap: 20
  },
  btnAddFirst: {
    backgroundColor: '#b3cbe3',
    borderRadius: 12,
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 140
  },
  btnCheckOut: {
    width: '70%',
    backgroundColor: '#b3cbe3',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
