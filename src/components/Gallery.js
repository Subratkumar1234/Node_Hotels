// import React from 'react';
// import './Gallery.css';
// import Gallery_1 from '../assets/Gallery_1.jpg'; // Add images in the assets folder
// import Gallery_2 from '../assets/Gallery_2.jpg';
// import Gallery_3 from '../assets/Gallery_3.jpg';
// import Gallery_4 from '../assets/Gallery_4.jpg';
// import Gallery_5 from '../assets/Gallery_5.jpg';
// import Gallery_6 from '../assets/Gallery_6.jpg';
// import Gallery_7 from '../assets/Gallery_7.jpg';
// import Gallery_8 from '../assets/Gallery_8.jpg';
// const Gallery = () => {
//   return (
//     <section id="gallery" className="gallery">
//       <h2>Gallery</h2>
//       <div className="gallery-images">
//         <img src={Gallery_7} alt="Gallery 7" />
//         <img src={Gallery_8} alt="Gallery 8" />
//         <img src={Gallery_3} alt="Gallery 3" />
//         <img src={Gallery_4} alt="Gallery 4" />
//         <img src={Gallery_5} alt="Gallery 5" />
//         <img src={Gallery_6} alt="Gallery 6" />
//       </div>
//     </section>
//   );
// }

// export default Gallery;



import React from 'react';
import Carousel from './Carousel';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <Carousel />
    </section>
  );
}

export default Gallery;
