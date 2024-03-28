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
import { useProductsStore } from 'src/providers/ProductsStore'

export function HomeScreen (): JSX.Element {
  const { isLoading, handleViewDetail, error, dataProductsMemo, data } = useHome()
  const { setAddNewProductCar, totalToPaid } = useProductsStore()
  const categories = organizeDataByCategory(data?.products ?? [])

  if (!isLoading && error?.message != null) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  console.log('LENGTH', totalToPaid)

  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent categories={Object.keys(categories)} />
        <RenderProducts
        handleAddToCar={setAddNewProductCar}
          products={dataProductsMemo ?? []}
          handleViewDetail={handleViewDetail}
        />
      </ScrollView>
    </HomeLayout>
  )
}
