import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const NewBlogForm = ({ setBlogFormVisible, setBlogs }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      const newBlog = { title, author, url }
      await blogService.create(newBlog)
      blogService.getAll().then((blogs) => setBlogs(blogs))
    } catch (exception) {
      console.log(exception)
    }
  }
  return (
    <form onSubmit={handleCreate}>
      <div>
        title
        <input
          id='title'
          type='text'
          value={title}
          name='Title'
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author
        <input
          id='author'
          type='text'
          value={author}
          name='Author'
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url
        <input
          id='url'
          type='text'
          value={url}
          name='Url'
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button id='create' type='submit'>
        create
      </button>
      <button onClick={() => setBlogFormVisible(false)}>cancel</button>
    </form>
  )
}

NewBlogForm.propTypes = {
  setBlogFormVisible: PropTypes.func.isRequired,
  setBlogs: PropTypes.func.isRequired,
}

export default NewBlogForm
