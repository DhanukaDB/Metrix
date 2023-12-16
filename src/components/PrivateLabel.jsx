import { BottomBar } from './';

const PrivateLabel = () => {
    return (
        <>
            <header className="invisible">
                <span title='Privacy title'>Private label page</span>
            </header>
            <main>
                <div className="custom-container mx-auto pt-20">
                    <section aria-labelledby="private-label-section" role='banner'>
                        <h1 id="private-label-section" className="text-5xl font-poppins font-bold uppercase text-[#6D7E15] text-center mb-10" aria-level={1}>Private Label</h1>
                        <p className=" font-poppins mb-10">
                            Metric products is a 70 years plus family owned business. We have been making bra and swim cups for a long
                            time and have perfected the technique of giving softness to products while being able to hold shapes of almost
                            any design. To accomplish this and become a leading swimwear and bra cup supplier around the world, we have
                            developed and perfected a product we call Metric 66.
                        </p>
                        <ol className="list-disc font-poppins ml-5">
                            <li className="mb-4"> Metric 66 is often mistaken for Neoprene which it is not. Neoprene cannot be molded and is not breathable. It is also extremely heavy.</li>
                            <li className="mb-4">On the other hand, metric 66 is breathable, light weighted, hand washable and is very quick to dry.</li>
                            <li className="mb-4"> It is versatile and can be created in a variety of stiffness' and softnes'.</li>
                            <li className="mb-4"> Metric 66 is Oeko Tex certified, which is a European certification which ensures the contents and make of a product are safe to be next to the most intimate parts of the body.</li>
                            <li>Ideally suited to create all sorts of three dimensional objects, metric 66 can be created in any color imaginable.</li>
                        </ol>
                    </section>
                    <section aria-labelledby="customizable-product-section" className="font-poppins text-center mt-10">
                        <div id="customizable-product-section" className="text-3xl font-semibold font-poppins text-dimDark" aria-level={1}>All products are customizable.</div>
                        <p className="mt-2">
                            Send us a sketch and we'll get your prototype done in less than 5 days.
                        </p>
                    </section>
                    <section aria-labelledby="build-what-you-desire-section" className="font-poppins text-center mt-10">
                        <div id="build-what-you-desire-section" className="text-2xl font-semibold font-poppins text-dimDark" aria-level={1}>We build what you desire.</div>
                        <p className="mt-2">
                            Using our proprietary Metric 66, the only limit is your imagination.
                        </p>
                    </section>
                    <div className="text-center">
                        <p className="font-poppins mt-10">
                            — All products are manufactured at the comfort of our socially responsible plant located in Sri Lanka. —
                        </p>
                    </div>
                </div>
                <BottomBar />
            </main>
        </>
    );
}

export default PrivateLabel;