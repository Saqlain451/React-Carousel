import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // requires a loader
import axios from "axios";
import Card from "./Card";
const App = () => {
  const url = import.meta.env.VITE_API;
  const [allData, setAllData] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselConfig = {
    responsive: responsive,
    itemClass: 'carousel-item-padding-40-px', // Adjust the gap between items
    containerClass: 'carousel-container',
    keyBoardControl:true,
    draggable:true,
    showDots : true,
  };

  const getApiData = async () => {
    try {
      const data = await axios.get(url);
      setAllData(data.data.success);
    } catch (error) {
      console.error(error);
    }
  };

  const getShorte = (str) => {
    return str.length >= 100 ? `${str.slice(0, 100)}...` : str;
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="container">
    

        <Carousel {...carouselConfig}>
          {allData.map((courses) => {
            const { title, img, description, _id } = courses;
            const des = getShorte(description);
            return <Card img={img} title={title} key={_id} description={des} />;
          })}
        </Carousel>
        </div>
    </>
  );
};

export default App;
