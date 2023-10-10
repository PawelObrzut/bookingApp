import React from 'react'
import NotFoundImage from '../../../../public/404.jpeg'

const NotFound = () => {
  return (
    <main className='container'>
      <h2>
        Nothing to find here.
      </h2>
      <img src={NotFoundImage} alt="notFound" />
    </main>
  )
}

export default NotFound