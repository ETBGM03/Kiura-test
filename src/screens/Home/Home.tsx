import { ScrollView, View } from 'react-native'
import React from 'react'
import { useHome } from '@hooks'
import { HomeLayout } from '@components'

import { Loader } from './Loader'
import { HeaderComponent } from './Header'
import { Error } from './Error'
import { organizeDataByCategory } from '@helpers'
import { RenderProducts } from './RenderProducts'
import { useProductsStore } from 'src/providers/ProductsStore'
import { ProductsFiltered } from './ProductsFiltered'

export function HomeScreen (): JSX.Element {
  const {
    isLoading,
    handleViewDetail,
    error,
    dataProductsMemo,
    dataProductsSearchedMemo,
    data
  } = useHome()
  const { setAddNewProductCar, searchQuery } = useProductsStore()
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
        <View>
          {dataProductsSearchedMemo != null &&
          dataProductsSearchedMemo?.length > 0
            ? (
            <ProductsFiltered
              searchQuery={searchQuery}
              handleViewDetail={handleViewDetail}
              handleAddToCar={setAddNewProductCar}
              dataProductsSearchedMemo={dataProductsSearchedMemo ?? []}
            />
              )
            : null}
        </View>

        <RenderProducts
          handleAddToCar={setAddNewProductCar}
          products={dataProductsMemo ?? []}
          handleViewDetail={handleViewDetail}
        />
      </ScrollView>
    </HomeLayout>
  )
}
