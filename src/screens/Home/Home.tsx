import {
  ScrollView
} from 'react-native'
import React from 'react'
import { useHome } from '@hooks'
import { HomeLayout } from '@components'

import { Loader } from './Loader'
import { HeaderComponent } from './Header'
import { Error } from './Error'
import { organizeDataByCategory } from '@helpers'
import { RenderProducts } from './RenderProducts'

export function HomeScreen (): JSX.Element {
  const { isLoading, handleViewDetail, error, dataProductsMemo, data } = useHome()

  const categories = organizeDataByCategory(data?.products ?? [])

  if (!isLoading && error?.message != null) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent categories={Object.keys(categories)} />
        <RenderProducts
          products={dataProductsMemo ?? []}
          handleViewDetail={handleViewDetail}
        />
      </ScrollView>
    </HomeLayout>
  )
}
