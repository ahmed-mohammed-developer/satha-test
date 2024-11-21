import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1s from '../images/albom/1.jpeg';
import img2s from '../images/albom/2.jpeg';
import img4s from '../images/albom/4.jpeg';
import img5s from '../images/albom/5.jpeg';
import img6s from '../images/albom/6.jpeg';
import img7s from '../images/albom/7.jpeg';
import img8s from '../images/albom/8.jpeg';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: '100%', height: 'auto', padding: '20px', background: '#f5f7fa'}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className='btnservic'> 
        <button type="button" className="btn btn-danger" style={{marginTop: "10px" }} onClick={() => window.location.href='tel:0506353350'}>اتصل بنا</button>
        </div>
    </Box>
  );
}

const itemData = [
  {
    img: img1s,
    title: 'سطحة',
  },
  {
    img: img4s,
    title: 'سطحة',
  },
  {
    img: img2s,
    title: 'سطحة',
  },
  {
    img: img5s,
    title: 'سطحة',
  },
  {
    img: img6s,
    title: 'سطحة',
  },
  {
    img: img7s,
    title: 'سطحة',
  },
  {
    img: img8s,
    title: 'سطحة',
  },
];

