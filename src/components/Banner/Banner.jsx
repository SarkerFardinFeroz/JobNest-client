import BannerText from "./BannerText";
import PropTypes from 'prop-types';
const Banner = (text) => {
    const {text1,text2} =text
    return (
        <div className="relative">
        <div className="bg-[url('https://i.ibb.co/MMBMs1T/banner2-1.jpg')] bg-no-repeat bg-center bg-cover h-[20vh] md:h-[40vh] z-20 flex flex-col items-center justify-center text-white pt-8">
          <div className="relative z-20 text-center  ">
            <h1 className="font-bold text-2xl md:text-4xl text-center mb-4">
            <BannerText >{text1}</BannerText>
            </h1>
            <p className="text-[#648ead]"><BannerText>{text2}</BannerText></p>
            
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-[#0d2235] bg-opacity-80"></div>
      </div>
    );
};
Banner.propTypes = {
    text: PropTypes.object
};
export default Banner;