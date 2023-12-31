import { BottomBar } from '../';
import { productCards } from '../../constants';

function renderCardName(param) {
   switch (param) {
      case 'push-up cups':
         return <span>push-up<br />cups</span>;
      case 'strapless cups':
         return <span>strapless<br />cups</span>;
      case 'bando shapes cups':
         return <span>bando shapes<br />cups</span>;
      default:
         return <span>triangular<br />cups</span>;
   }
}

const ComfortFitPets = () => {
   return (
      <main>
         <section className="custom-container mx-auto pt-20">
            <header>
               <h1 className="text-4xl font-poppins font-bold capitalize text-[#6D7E15]">cups and underwires for<br />intimate apparel</h1>
            </header>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            <section aria-labelledby="bra-underwires-section">
               <h2 id="bra-underwires-section" className="text-5xl font-poppins font-bold uppercase text-center text-[#137BA4] mt-14">bra underwires</h2>
               <div className="flex flex-row justify-center space-x-10">
                  {
                     productCards[2].categories[1].types.map((type, index) => (
                        <div className="mt-10" key={index}>
                           <h3 className="text-3xl font-poppins font-semibold uppercase text-center text-[#6D7E15] mb-10">
                              {productCards[2].categories[1].title === 'bra underwires' ? type.title : renderCardName(type.title)}
                           </h3>
                           {
                              type.images.map((img, imgIndex) => (
                                 <div key={imgIndex} className="w-full mx-auto rounded-tr-4xl rounded-bl-4xl overflow-hidden mb-10">
                                    <img src={img} alt={`image-${imgIndex}`} className="w-full" />
                                 </div>
                              ))
                           }
                        </div>
                     ))
                  }
               </div>
            </section>
         </section>
         <BottomBar />
      </main>
   );
}

export default ComfortFitPets;