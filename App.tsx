import React from 'react'
import { AppProvider } from '@providers';
import { AppRouter } from '@navigation';


export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
