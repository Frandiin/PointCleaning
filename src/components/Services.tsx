export const Services = () => {
  return (
    <div className="p-4">
      <h1 className="text-center mt-10">our services</h1>
      <div className="md:grid md:grid-cols-2 justify-center items my-10 items-center ">
        <div className="flex justify-center my-5">
          <img
            src="./deep-cleaning.png"
            width={400}
            height={100}
            className="shadow-lg rounded-md"
          />
        </div>
        <div>
          <h1>Deep Cleaning</h1>
          <p>
            Our deep cleaning is a comprehensive and thorough service, designed
            to bring freshness and brightness back to your space. We carry out a
            deep and detailed cleaning, covering all corners, crevices and
            surfaces, including those difficult to access. It is ideal for
            remove dirt accumulated over time and ensure a really immaculate.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 justify-center items my-10 items-center gap-3 flex flex-col-reverse">
        <div>
          <h1>Laundry</h1>
          <p>
            We offer a wide range of cleaning services, including washing
            clothes, bed linen and towels, as well as specialty items such as
            sofas and rugs. We maintain the same high standard of quality that
            you have come to expect from our home cleaning services. Even though
            laundry is not our main focus, you can trust our dedication and
            quality in taking care of your clothes and personal items, allowing
            you to enjoy life to the fullest.
          </p>
        </div>
        <div className="flex justify-center my-5">
          <img
            src="./laundry.png"
            width={400}
            height={100}
            className="shadow-lg rounded-md"
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 justify-center items my-10 items-center gap-3">
        <div className="flex justify-center my-5">
          <img
            src="./house-cleaning-season.png"
            width={400}
            height={100}
            className="shadow-lg rounded-md"
          />
        </div>
        <div>
          <h1>Move in - move out</h1>
          <p>
            Residential moves can be stressful, and cleaning should not be be a
            concern. Offers deep cleaning services for both who is moving to a
            new home (Move-In) and for those who is leaving a property
            (Move-Out). We prepare the space for you or the next occupant,
            leaving it impeccable.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 justify-center items my-10 items-center gap-3 flex flex-col-reverse ">
        <div>
          <h1>Airbnb cleaning</h1>
          <p>
            If you are an Airbnb guest, know that cleaning is essential to keep
            guests satisfied. Offer a cleaning service specialized for Airbnb
            properties, ensuring that the location look impeccable and inviting
            for your guests, contributing for positive reviews and ratings.
          </p>
        </div>
        <div className="flex justify-center my-5">
          <img
            src="./airbnb-cleaning.png"
            width={400}
            height={100}
            className="shadow-lg rounded-md"
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 justify-center items my-10 items-center gap-3">
        <div className="flex justify-center my-5">
          <img
            src="./office-cleaning.png"
            width={400}
            height={100}
            className="shadow-lg rounded-md"
          />
        </div>
        <div>
          <h1>Office Cleaning</h1>
          <p>
            Office environments require a specific approach to maintain
            productivity and professional image. Our specialized team performs
            office cleaning efficiently, addressing work areas, bathrooms and
            common areas. Keep your office clean and organized to create a
            healthy working environment.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 justify-center items my-10 items-center flex flex-col-reverse ">
        <div>
          <h1>Residential Cleaning</h1>
          <p>
            Our residential cleaning covers all areas of your home, ensuring
            every space stays clean and fresh. We offer ease of adapting to your
            needs, be it cleaning routine or special cleaning for specific
            comfort. Take care of your home with our trustworthy team.
          </p>
        </div>
        <div className="flex justify-center my-5">
          <img
            src="./residential-cleaning.png"
            width={400}
            height={100}
            className="shadow-lg rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
