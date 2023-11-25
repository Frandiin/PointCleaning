import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { ServicesCard } from "./ServicesCard";

export const Home = () => {
  const services = [
    {
      title: "Deep  Cleaning",
      description:
        "Our deep cleaning is a comprehensive and thorough service designed to bring freshness and brightness back to your space. We carry out a deep and detailed cleaning, covering all corners, crevices and surfaces, including those difficult to access. It is ideal for remove dirt accumulated over time and ensure a really immaculate.",
      buttonTitle: `Deep Cleaning`,
      link: "https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Deep%20Cleaning",
    },

    {
      title: "Laundry",
      description:
        "We offer a wide range of cleaning services, including washing clothes. We maintain the same high standard of quality that you have come to expect from our home cleaning services. Even though laundry is not our main focus, you can trust our dedication and quality in taking care of your clothes and personal items, allowing you to enjoy life to the fullest.",
      buttonTitle: "Laundry",
      link: "https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Laundry",
    },
    {
      title: "Move in - move out",
      description:
        "Residential moves can be stressful, and cleaning should not be be a concern. Offers deep cleaning services for both who is moving to a new home (Move-In) and for those who is leaving a property (Move-Out). We prepare the space for you or the next occupant, leaving it impeccable.",
      buttonTitle: "Move in - move out",
      link: "https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Move%20in%20-%20Move%20out",
    },
    {
      title: "Vacation Rental",
      description:
        "If you are an Airbnb guest, know that cleaning is essential to keep guests satisfied. Offer a cleaning service specialized for Airbnb properties, ensuring that the location look impeccable and inviting for your guests, contributing for positive reviews and ratings.",
      buttonTitle: "Vacation Rental",
      link: "https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Vacation%20Rental",
    },
    {
      title: "Office Cleaning",
      description:
        "Office environments require a specific approach to maintain productivity and professional image. Our specialized team performs office cleaning efficiently, addressing work areas, bathrooms and common areas. Keep your office clean and organized to create a healthy working environment.",
      buttonTitle: "Office Cleaning",
      link: "https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Office%20Cleaning",
    },
    {
      title: "Residential Cleaning",
      description:
        "Our residential cleaning covers all areas of your home, ensuring every space stays clean and fresh. We offer ease of adapting to your needs, be it cleaning routine or special cleaning for specific comfort. Take care of your home with our trustworthy team.",
      buttonTitle: "Residential Cleaning",
      link: "https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Residential%20Cleaning",
    },
  ];
  return (
    <div>
      <div className="relative mt-20 w-full">
        <div>
          <div
            className={
              "h-full w-full bg-[#1479bc60] z-10 absolute top-0 left-0"
            }
          />

          <img
            alt={"logo fiesp"}
            className={"laptop:min-h-screen"}
            src={"/home.png"}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="text-center md:bottom-[120px] 2xl:bottom-[300px] w-full p-1 absolute   md:text-white   uppercase font-bold  md:flex justify-start md:ml-10 z-20">
          <div className="md:flex-col relative bottom-[230px] md:bottom-0 sm:bottom-[400px] ml-3">
            <div className="flex flex-col justify-start items-start">
              <h1 className="md:text-[50px] lg:text-[80px] text-white text-[20px] sm:text-[40px] 2xl:text-[100px]">
                Point
              </h1>
              <h1 className="md:text-[50px] lg:text-[80px] text-white text-[20px] sm:text-[40px] 2xl:text-[100px]">
                Cleaning
              </h1>
            </div>
            <div className="flex flex-col justify-start items-start text-white ">
              <p className="text-justify  md:text-[40px] sm:text-[40px] text-[20px] 2xl:text-[100px]">
                The focus of our company is
                <br /> satisfied customer.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start mt-10 w-[150px]  z-50  ">
              <a
                href="https://api.whatsapp.com/send?phone=18572631670&text=Hi%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services%0A"
                target="_blank"
                className="text-[#1479bc] md:w-[600px] "
              >
                <Button
                  sx={{
                    borderRadius: "8px",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  <PhoneIcon sx={{ color: "#1479bc" }} />
                  <span>Talk to us</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 ">
        <h1 className="text-center">Our compromise</h1>
        <p className="text-justify mt-3">
          At Point Cleaning, our commitment to excellence in cleaning services
          extends beyond indoor environments. We understand that caring for your
          clothes and personal items is an important extension of your
          well-being and comfort. That's why we offer high-quality laundry
          services to meet your additional needs.
        </p>
      </div>
      <div className="p-5">
        <h1 className="text-center">Services</h1>

        <div className="md:grid md:grid-cols-3  w-full justify-center  gap-2  ">
          {services.map((service) => (
            <ServicesCard {...service} />
          ))}
        </div>
        <div className="md:grid md:grid-cols-2  justify-center md:w-[80%] gap-2  flex flex-col mx-auto my-0">
          <ServicesCard
            description="Make sure your business’s newly built space looks perfect with post-construction cleaning in San Diego, CA. Our professional cleaners will ensure that your new or renovated business looks its best by eliminating all dust, dirt, and debris left behind by construction. We use the most effective products and techniques to ensure a flawless finish, guaranteeing that you make an incredible first impression."
            link="https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Post%20construction"
            buttonTitle="Post construction"
            title="Post construction"
          />

          <ServicesCard
            description="We offer excellent quality sofa and chair cleaning services. Talk to us for more info."
            link="https://api.whatsapp.com/send?phone=18572631670&text=Hello%2C%20I%20would%20like%20to%20talk%20about%20your%20service%20Sofa%20cleaning"
            buttonTitle="Sofa cleaning"
            title="Sofa cleaning
            "
          />
        </div>

        <div className="flex justify-center ">
          <img src="/logo.svg" />
        </div>
      </div>

      {/* <div className="p-4">
        <div className="flex gap-10 justify-between md:items-center p-3 flex-col md:grid md:grid-cols-2 md:mt-14 mx-auto">
          <div>
            <h1 className="md:text-[40px]">WELCOME TO POINT CLEANING!!</h1>
            <p>
              We started our journey in the cleaning market with a unwavering
              commitment to excellence. Our mission is to provide to you, our
              important client, a service that combines quality, speed and
              efficiency like no other. What makes us specials? Here are some
              reasons
            </p>
          </div>
          <div className="flex justify-center">
            <img src="./point-cleaning.png" className="md:w-[70%]" />
          </div>
        </div>
        <div className="mt-4">
          <p>
            Top Quality Products: At Point Cleaning, we believe that the basis
            of a cleaning service is exceptional in the products that we use.
            That's why we source exclusively the best products available on the
            market. Every surface shines with quality of the products we choose,
            and your home or business reflects that.
          </p>
        </div>
        <div className="flex gap-10 justify-center mt-10 flex-col md:flex-row">
          <div className="flex justify-between gap-3 flex-col md:flex-row md:items-center">
            <div className="flex flex-col gap-3 mx-auto">
              <div className="flex gap-3 items-center">
                <h1>1º</h1>
                <p>Residential Cleaning </p>
              </div>
              <div className="flex gap-3 items-center">
                <h1>2º</h1>
                <p>Airbnb</p>
              </div>
              <div className="flex gap-3 items-center">
                <h1>3º</h1>
                <p>Move in - move out</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="./top-services.jpg" width={300} />
          </div>
        </div>
        <div className="flex gap-3 justify-center mt-10">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-center">Services</h1>
            <div className="flex gap-3 flex-col md:flex-row p-4">
              <div>
                <div className="rounded-md md:relative shadow-lg border-2">
                  <img src="./deep-cleaning.png" width={400} />
                  <div className="text-sm  text-center bottom-0 w-full p-1 md:absolute text-[#1479bc] md:text-white  md:mb-20 uppercase font-bold py-3 md:bg-[#00000050]">
                    
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-md md:relative shadow-lg border-2">
                  <img src="./laundry.png" width={400} />
                  <div className="text-sm text-center bottom-0 w-full p-1 md:absolute text-[#1479bc]  md:text-white  md:mb-20 uppercase font-bold py-3 md:bg-[#00000050]">
                    <p>Laundry</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-md md:relative shadow-lg border-2">
                  <img src="./airbnb-cleaning.png" width={400} />
                  <div className="text-sm text-center bottom-0 w-full p-1 md:absolute text-[#1479bc]  md:text-white  md:mb-20 uppercase font-bold py-3 md:bg-[#00000050]">
                    <p>Airbnb cleaning</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-md md:relative shadow-lg border-2">
                  <img src="./office-cleaning.png" width={400} />
                  <div className="text-sm text-center bottom-0 w-full p-1 md:absolute text-[#1479bc] md:text-white  md:mb-20 uppercase font-bold py-3 md:bg-[#00000050]">
                    <p>Office Cleaning</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-md md:relative shadow-lg border-2">
                  <img src="./residential-cleaning.png" width={400} />
                  <div className="text-sm text-center bottom-0 w-full p-1 md:absolute font-bold text-[#1479bc] md:text-white  md:mb-16 uppercase py-3 md:bg-[#00000050]">
                    <p>Residential Cleaning</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-md md:relative shadow-lg border-2">
                  <img src="./house-cleaning-season.png" width={400} />
                  <div className="text-sm text-center bottom-0 w-full p-1 md:absolute object-cover text-[#1479bc] md:text-white  md:mb-20 uppercase font-bold py-3 md:bg-[#00000050]">
                    <p>Move in - move out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
