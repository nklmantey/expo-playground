import Header from '@/components/Header'
import Typography from '@/components/Typography'
import { TAG_ITEMS } from '@/constants/items'
import { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Animated, { Easing, LinearTransition } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

export default function AnimatedFlatlist() {
  const [query, setQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState(TAG_ITEMS)

  useEffect(() => {
    const items = TAG_ITEMS.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
    setFilteredItems(items)
  }, [query])

  return (
    <SafeAreaContainer>
      <Header title='Animated Flatlist' />

      <InputContainer>
        <SearchInput
          placeholder='Add tag'
          value={query}
          onChangeText={(e) => setQuery(e)}
        />
        <Animated.FlatList
          data={filteredItems}
          itemLayoutAnimation={LinearTransition.easing(Easing.ease).springify(800)}
          renderItem={({ item }) => (
            <TagItem>
              <Typography size='sm'>{item}</Typography>
            </TagItem>
          )}
          contentContainerStyle={{
            marginTop: 12,
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 12
          }}
        />
      </InputContainer>
    </SafeAreaContainer>
  )
}

const SafeAreaContainer = styled(SafeAreaView)`
  padding: 20px;
`

const InputContainer = styled(View)`
  margin: 16px 0px;
`

const SearchInput = styled(TextInput)`
  border: 1px solid #d3d3d3;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: UberMoveMedium;
`

const TagItem = styled(View)`
  background-color: #d3d3d3;
  padding: 2px 4px;
  border-radius: 4px
`