import React from 'react'
import Header from '../../components/Header/Header'
import LocationBar from '../../components/LocationBar/LocationBar'
import UpcommingMovies from '../../components/UpcommingMovies/UpcommingMovies'
import Repertoire from '../../components/Repertoire/Repertoire'
import ModalMenu from '../../components/ModalMenu/ModalMenu'

const index = () => {
  return (
    <>
      <ModalMenu />
      <Header />
      <LocationBar />
      <UpcommingMovies />
      <Repertoire />
    </>
  )
}

export default index