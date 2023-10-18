import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img className='bg-cover bg-no-repeat bg-center w-screen' src={banner} alt="" />
        </div>
    );
};

export default Banner;