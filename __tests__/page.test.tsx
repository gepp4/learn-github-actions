import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('Page', () => {
  render(<Page />)
  const textElement = screen.getByText('npm run test');
  expect(textElement).toBeTruthy()

})