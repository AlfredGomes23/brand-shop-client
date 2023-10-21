/* eslint-disable react/prop-types */

const Slider = ({products}) => {
    return (
        <div className="carousel w-96 rounded-lg mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={products[0].img} className="w-96 rounded-lg " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent text-4xl">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent text-4xl">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={products[1].img} className="w-96   rounded-lg " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent text-4xl">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent text-4xl">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={products[2].img} className="w-96 rounded-lg " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-transparent text-4xl">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent text-4xl">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={products[3].img} className="w-96 rounded-lg " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-transparent text-4xl">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent text-4xl">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;