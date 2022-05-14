import React from 'react'

const FullImage = ({setModal, fullImage}) => {

    function handelClick() {
        setModal(false)
    }
  return (
      

        <div className='modal'>
            <img src={fullImage} alt="" />
            <span class="material-icons-sharp close" onClick={handelClick}>close</span>

        </div>
     
      
  )
}

export default FullImage