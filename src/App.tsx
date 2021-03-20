import React from 'react'

import { VStack, HStack, Paragraph, Heading, Anchor } from './components'
import { GlobalStyle } from './GlobalStyle'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <HStack gap="SM" flexChildren="1">
        <VStack gap="SM">
          <Paragraph>Default Text</Paragraph>
          <Paragraph size="3XL">3XL Text</Paragraph>
          <Paragraph size="2XL">2XL Text</Paragraph>
          <Paragraph size="XL">XL Text</Paragraph>
          <Paragraph size="LG">LG Text</Paragraph>
          <Paragraph size="MD">MD Text</Paragraph>
          <Paragraph size="SM">SM Text</Paragraph>
          <Paragraph size="XS">XS Text</Paragraph>
        </VStack>

        <VStack gap="SM">
          <Paragraph>Default alignment</Paragraph>
          <Paragraph align="center">Centered aligned</Paragraph>
          <Paragraph align="start">Start aligned</Paragraph>
          <Paragraph align="end">End aligned</Paragraph>
        </VStack>

        <VStack gap="SM">
          <Paragraph>Default Transform</Paragraph>
          <Paragraph transform="capitalize">capitalised text</Paragraph>
          <Paragraph transform="uppercase">uppercase</Paragraph>
          <Paragraph transform="lowercase">Lowercase</Paragraph>
        </VStack>

        <VStack gap="SM">
          <Heading>Default Transform</Heading>
          <Heading transform="capitalize">capitalised text</Heading>
          <Heading transform="uppercase">uppercase</Heading>
          <Heading transform="lowercase">Lowercase</Heading>
        </VStack>

        <VStack gap="SM">
          <Anchor href="https://google.com">Default Transform</Anchor>
        </VStack>
      </HStack>
    </div>
  )
}
