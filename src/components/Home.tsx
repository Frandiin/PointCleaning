export const Home = () => {
  return (
    <div className="p-4">
      <div className="flex gap-10 justify-between md:items-center p-3 flex-col md:grid md:grid-cols-2 md:mt-14 mx-auto">
        <div>
          <h1 className="md:text-[40px]">WELCOME TO POINT CLEANING!!</h1>
          <p>
            A year ago, we started our journey in the cleaning market with a
            unwavering commitment to excellence. Our mission is to provide the
            you, our important client, a service that combines quality, speed
            and efficiency like no other. What makes us specials? Here are some
            reasons
          </p>
        </div>
        <div className="flex justify-center">
          <img src="./clean-element.svg" />
        </div>
      </div>
      <div className="mt-4">
        <p>
          Top Quality Products: At Point Cleaning, we believe that the basis of
          a cleaning service is exceptional in the products that we use. That's
          why we source exclusively the best products available on the market.
          Every surface shines with quality of the products we choose, and your
          home or business reflects that.
        </p>
      </div>
      <div className="flex gap-10 justify-center mt-10 flex-col md:flex-row">
        <div className="flex justify-center gap-3 flex-col md:flex-row md:items-center">
          <div className="flex flex-col gap-3 mx-auto">
            <div className="flex gap-3 items-center">
              <h1>1º</h1>
              <p>Superficial Cleaning</p>
            </div>
            <div className="flex gap-3 items-center">
              <h1>2º</h1>
              <p>Airbnb</p>
            </div>
            <div className="flex gap-3 items-center">
              <h1>3º</h1>
              <p>MOVE IN - MOVE OUT</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="./top-services.jpg" width={300} />
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-10">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-center">Services</h1>
          <div className="flex gap-3 flex-col md:flex-row p-4">
            <div>
              <div className="rounded-md md:relative shadow-lg border-2">
                <img src="./deep-cleaning.png" width={400} />
                <div className="text-sm  rounded-full text-center bottom-0 w-full p-1 md:absolute text-[#1479bc] md:text-white relative md:mb-20 uppercase font-bold">
                  <p>Deep Cleaning</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md md:relative shadow-lg border-2">
                <img src="./surface-cleaning.png" width={400} />
                <div className="text-sm rounded-full text-center bottom-0 w-full p-1 md:absolute text-[#1479bc]  md:text-white relative md:mb-16 uppercase font-bold">
                  <p>Superficial Cleaning</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md md:relative shadow-lg border-2">
                <img src="./airbnb-cleaning.png" width={400} />
                <div className="text-sm rounded-full text-center bottom-0 w-full p-1 md:absolute text-[#1479bc]  md:text-white relative md:mb-20 uppercase font-bold">
                  <p>Airbnb cleaning</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md md:relative shadow-lg border-2">
                <img src="./office-cleaning.png" width={400} />
                <div className="text-sm rounded-full text-center bottom-0 w-full p-1 md:absolute text-[#1479bc] md:text-white relative md:mb-20 uppercase font-bold">
                  <p>Office Cleaning</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md md:relative shadow-lg border-2">
                <img src="./residential-cleaning.png" width={400} />
                <div className="text-sm rounded-full text-center bottom-0 w-full p-1 md:absolute font-bold text-[#1479bc] md:text-white relative md:mb-16 uppercase">
                  <p>Residential Cleaning</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md md:relative shadow-lg border-2">
                <img src="./house-cleaning-season.png" width={400} />
                <div className="text-sm rounded-full text-center bottom-0 w-full p-1 md:absolute object-cover text-[#1479bc] md:text-white relative md:mb-20 uppercase font-bold">
                  <p>Entry/Exit Cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
