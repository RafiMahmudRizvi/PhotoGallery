import React from 'react'


const UnsplashImages = ({url, key, fullUrl, getImg, setModal, setFullImage}) => {
  return (
   <img className='pics' src={url} key={key} alt="" onClick={()=>{getImg(fullUrl)}} />
  )
}

export default UnsplashImages