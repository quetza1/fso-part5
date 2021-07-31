import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'test title',
    author: 'test author',
    url: 'http://test.com',
    likes: 3,
  }

  const component = render(<Blog blog={blog} />)
  expect(component.container).toHaveTextContent('test title')
  expect(component.container).toHaveTextContent('test author')
  expect(component.container).not.toHaveTextContent('http://test.com')
  expect(component.container).not.toHaveTextContent('3')
})
