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
    elevation: 6
  }
})
