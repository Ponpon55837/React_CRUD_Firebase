import React, { useState } from 'react'
import PhotoGrid from './PhotoGrid'
import Model from './Model'
// import '../../style/photo.css'

const PhotoProfile = () => {
  const [selectdImg, setSelectedImg] = useState(null)

  return (
    <div className='Photo'>
      <PhotoGrid setSelectedImg={setSelectedImg} />
      { selectdImg && <Model selectdImg={selectdImg} setSelectedImg={setSelectedImg} /> }
      <PhotoUpload />
    </div>
}

export default PhotoProfile
