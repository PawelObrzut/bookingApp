import TopBanner from '../components/TopBanner/TopBanner'
import Header from '../components/Header/Header'
import { useState } from 'react';
import ModalMenu from '../components/ModalMenu/ModalMenu';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <ModalMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <TopBanner />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default HomePage