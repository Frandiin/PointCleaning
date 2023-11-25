export const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className=" mt-[30px] text-[#1A77BA} md:text-[80px] ">
          Welcome to
          <br /> <span className="font-bold">Point Cleaning</span>
        </h1>
        <p className="mt-2">
          A year ago, we began our journey into the cleaning market with an
          unwavering commitment to excellence. Our mission is to provide you,
          our important customer, with a service that combines quality, speed
          and efficiency like no other. We offer cleaning services for schools,
          churches, medical facilities, office buildings, and more. We customize
          our services to meet your specific needs. Ask us about daily, weekly
          and bi-weekly weekly service. Call or email for a free quote
        </p>

        <div>
          <h1 className="text-center border-[#1A77BA] border-b-4 md:w-[700px] mx-auto">
            What makes us so special? Here are some reasons:
          </h1>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 w-full">
          <div className="flex justify-center w-full mt-3">
            <img
              src="pexels-anna-shvets-5217899.png"
              style={{ borderRadius: "5px", height: "400px", width: "400px" }}
            />
          </div>

          <div className="flex flex-col justify-center mx-auto w-full md:ml-20">
            <div className="flex items-center ">
              <h1>First Quality Products:</h1>
            </div>
            <div>
              <p className="md:w-[80%]  w-full">
                At Point Cleaning, we believe that the foundation of a cleaning
                service is exceptional in the products we use. That's why we
                exclusively source the best products available on the market.
                Every surface shines with the quality of the products we choose,
                and your home or business reflects that.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full">
          <div className="flex flex-col justify-center mx-auto w-full md:ml-20">
            <div className="flex items-center  ">
              <h1>Exceptional Team:</h1>
            </div>
            <div>
              <p className="md:w-[80%]  w-full">
                Our team is the heart of our company. We select the best
                professionals in the field, who combine our vision of quality
                and dedication. They are trained, experienced and passionate
                about what they do. Every member of our team is committed to
                ensuring your space is spotless.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full mt-3">
            <img
              src="pexels-matilda-wormwood-4099481.png"
              style={{ borderRadius: "5px", height: "400px", width: "400px" }}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 w-full">
          <div className="flex justify-center w-full mt-3">
            <img
              src="mobile-model-clean-communication-industrial-toilet-513174-pxhere.com.png"
              style={{ borderRadius: "5px", height: "400px", width: "400px" }}
            />
          </div>

          <div className="flex flex-col justify-center mx-auto w-full md:ml-20">
            <div className="flex items-center w-full ">
              <h1 className="text-justify">Commitment to hard work:</h1>
            </div>
            <div>
              <p className="md:w-[80%]  w-full">
                At Point Cleaning, we believe that success is the result of
                constant effort. We work hard every day to exceed our customers'
                expectations. No matter the size of the challenge, we are ready
                to face it with dedication and determination.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 w-full">
          <div className="flex flex-col justify-center mx-auto w-full md:ml-20">
            <div className="flex items-center ">
              <h1 className="text-center">Flexibility:</h1>
            </div>
            <div>
              <p className="md:w-[80%]  w-full">
                We understand that each client is unique, and their needs vary.
                Therefore, we are extremely flexible and adapt our services to
                meet your specific needs. Whether it's regular cleaning or a
                special request, we are ready to meet any request.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full mt-3">
            <img
              src="pexels-tima-miroshnichenko-6197116.png"
              style={{ borderRadius: "5px", height: "400px", width: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
