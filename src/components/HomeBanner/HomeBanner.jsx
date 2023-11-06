const HomeBanner = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('https://i.ibb.co/vJWNHPv/bannerhome.jpg')] bg-no-repeat bg-center bg-cover h-[70vh] z-20 flex flex-col items-center justify-center text-white pt-8">
          <div className="relative z-20  ">
            <h1 className="font-bold text-2xl md:text-4xl text-center mb-4">
              Find Your Dream Job Today Search, <br /> Explore, and Apply Your Next
              Career Awaits
            </h1>
            <p>Discover Your Dream Career and Find the Perfect Job Match</p>
            <div className="bg-white w-max mx-auto mt-8 rounded-lg flex gap-2 md:gap-4 py-1 md:py-2 px-1 md:px-3">
                <input type="text" className="border py-1 md:py-2 px-1 md:px-3 text-black outline-none  rounded-lg " placeholder="Search"/>
                <button className="bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg">
                    Search
                  </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-[#120b27] bg-opacity-90"></div>
      </div>
    </>
  );
};

export default HomeBanner;
