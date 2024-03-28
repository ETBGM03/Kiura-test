import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { type PropsWithChildren } from 'react'
import { RootSiblingParent } from 'react-native-root-siblings'

const queryClient = new QueryClient()

export function AppProvider (props: PropsWithChildren): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>{props.children}</RootSiblingParent>
    </QueryClientProvider>
  )
}
