import { Link } from 'react-router-dom';
import { BottomBar, Modal } from '../';
import { productCards } from '../../constants';

function formatTitles(param) {
   return param.replace(/\s+/g, '-').toLowerCase();
}

const ComfortFitPetsHome = () => {
   return (
      <main>
         <section className="custom-container mx-auto pt-20">
            <header>
               <h1 className="text-4xl font-poppins font-bold capitalize text-[#6D7E15] text-center md:text-left"  aria-level={1} >comfort fit pets</h1>
            </header>
            <div className="w-full my-4 border border-t-primaryBlue"></div>
            {
               productCards[0].categories.map((product, indexOne) => (
                  <div key={indexOne}>
                     <section aria-labelledby={formatTitles(product.title) + '-section'} className="mt-10">
                        <div id={formatTitles(product.title) + '-section'} className="text-4xl md:text-5xl font-poppins font-bold uppercase text-center text-[#137BA4] mb-10"  aria-level={2}>{product.title}</div>
                        <div className="block md:flex md:flex-row justify-center md:space-x-10"  role='region'>
                           {
                              product.types.map((type, indexTwo) => (
                                 <div key={indexTwo} className="mb-20 md:mb-0" >
                                    <div>
                                       <img src={type.imageOne} alt={'imageOneOf' + indexTwo} className="w-full border-2 rounded-lg" />
                                    </div>
                                    <h2 className="uppercase text-2xl font-semibold font-poppins text-[#6D7E15] text-center my-5 px-10"  aria-level={2}>{type.title}</h2>
                                    <div className="mt-8 mb-20 text-center">
                                       <a href={type.amazonLink} title={product.title + ' order on amazon link ' + indexTwo} aria-labelledby={formatTitles(product.title) + '-order-on-amazon-' + indexTwo} target="_blank"
                                          className="font-poppins uppercase font-semibold text-[#000000] rounded-xl px-5 py-2 bg-primaryGreen hover:bg-primaryBlue transition-all"
                                          >order on amazon</a>
                                       <br /><br />
                                       <Link to={type.fitInstructionsLink} role="link" aria-labelledby={formatTitles(product.title) + '-view-fit-instructions-' + indexTwo}
                                          title={'Link to go to ' + product.title + ' view fit instructions ' + indexTwo}>
                                          <span className="capitalize cursor-pointer font-poppins text- [#137BA4] hover:underline underline-offset-4">
                                             View fit instructions
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="w-full rounded-lg border overflow-hidden bg-white p-4">
                                       <h3 className="uppercase font-bold text-center"  aria-level={3}>Available Colors</h3>
                                       <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4 mt-3">
                                          {
                                             type.colors.map((colorImg, colorIndex) => (
                                                <div key={colorIndex}>
                                                   <img src={colorImg} alt={'color' + colorIndex} />
                                                </div>
                                             ))
                                          }
                                       </div>
                                    </div>
                                 </div>
                              ))
                           }
                        </div>
                     </section>
                     {
                        indexOne < productCards[0].categories.length - 1 ? <div className="w-full my-16 border border-primaryBlue"></div> : null
                     }
                  </div>
               ))
            }
            {/* <Modal /> */}
         </section>
         <BottomBar />
      </main>
   );
}

export default ComfortFitPetsHome;