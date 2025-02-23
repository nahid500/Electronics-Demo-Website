import bigImage from '../images/h6.jpg';
import smallImage1 from '../images/h2.jpg';
import smallImage2 from '../images/h3.jpg';
// import smallImage3 from '../images/h4.jpeg';

const Image = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex w-full max-w-screen-lg">

        {/* Large Image */}
        <div className="flex-shrink-0 w-2/3">
          <img 
            src={bigImage} 
            alt="Big Image" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Small Images on the Right */}
        <div className="ml-4 flex flex-col space-y-4 w-1/3">
          <img 
            src={smallImage1} 
            alt="Small Image 1" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img 
            src={smallImage2} 
            alt="Small Image 2" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* <img 
            src={smallImage3} 
            alt="Small Image 3" 
            className="w-full h-auto rounded-lg shadow-lg"
          /> */}
        </div>

      </div>
    </div>
  );
};

export default Image;
