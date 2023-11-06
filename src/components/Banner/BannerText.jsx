import PropTypes from 'prop-types';

const BannerText = ({children}) => {
    return (
        <>
          {children}  
        </>
    );
};

BannerText.propTypes = {
    children: PropTypes.string
};

export default BannerText;