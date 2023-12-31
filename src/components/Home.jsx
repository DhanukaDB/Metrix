import { Link } from 'react-router-dom';
import { productCards } from '../constants';

const Home = () => {
    return (
        <>
            <header className="invisible">
                <h1 title='Main page'>Metric main page</h1>
            </header>
            <main  role = 'main' className="custom-container m-auto h-full">
                <div  className="block md:flex md:flex-row items-start justify-center md:space-x-16 absolute top-56 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4/5">
                    {productCards.map((card, index) => (
                        <section className="w-full md:w-1/3 text-center mb-16 md:mb-0" key={index}>
                            <div  className="flex flex-row space-x-7 items-center">
                                <div  aria-labelledby={'image-one-' + index} className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                    <img src={card.imageOne} aria-labelledby={'image-one-' + index} alt={'image-one-' + index} />
                                </div>
                                <div  aria-labelledby={'image-two-' + index} className="w-1/2 rounded-4xl overflow-hidden green-shadow">
                                    <img src={card.imageTwo} aria-labelledby={'image-one-' + index} alt={'image-two-' + index} />
                                </div>
                            </div>
                            <div  aria-labelledby={'three-main-product-categories-' + index} className="bg-primaryGreen px-2 py-3 rounded-3xl mt-10 md:mt-20">
                                <Link to={'products/' + card.path} aria-labelledby={'kit Image number ' +index}  title={ 'product name' +card.name} >
                                    <div className="uppercase text-linkBlack hover:text-primaryBlue transition-all font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                                        {card.name}
                                    </div>
                                </Link>
                                <div className="uppercase font-poppins font-medium text-2xl text-linkBlack">{card.subName}</div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Home;