import React, {useEffect, useState} from 'react';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';

import Heading from './components/Heading';
import Loader from './components/Loader';
import UnsplashImages from './components/UnsplashImages';
import FullImage from './components/FullImage'




function App() {
      const [images, setImage] = useState([]);
      const [modal, setModal] = useState(false);
      const [fullImage, setFullImage] = useState('');

      useEffect(() => {
        fetchImages();
      }, [])

      const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        axios
          .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
          .then(res => {
           
            setImage([...images, ...res.data]);
          })
      }
      const getImg = (fullUrl)=>{
            setFullImage(fullUrl)
            setModal(true)
      }

  return (
    <div className="App">
     {!modal && <Heading />}
      {modal ? <FullImage setModal={setModal} fullImage={fullImage}/> :
         
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader/>}
     >
 
         <div className="gallery">
            {images.map(image=> (
              <UnsplashImages 
                url={image.urls.thumb}
                fullUrl={image.urls.full}
                key={image.id}
                getImg={getImg}
                setModal={setModal}
                setFullImage={setFullImage}
               />))}
         </div>


     </InfiniteScroll>
      
      }
    
    
    </div>
                
      
  );
}

export default App;

