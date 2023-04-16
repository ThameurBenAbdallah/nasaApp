import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesApod } from '../redux/apodReducer';

const ApodImages = () => {
  const dispatch = useDispatch();
  const { image, loading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    dispatch(fetchImagesApod());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div >
      <h1>Picture of the day:</h1>
      <br></br>
      <div >
      
      <p>{image.explanation}</p>
      <br></br>
      <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}>
        
          <img src={image.url} alt={image.title} />
        
      </div>
      </div>
      
    </div>
  );
};

export default ApodImages;
