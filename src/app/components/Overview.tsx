"use client";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Overview = () => {
  const images = [
    "/images/image.jpg",
    "/images/image2.jpg",
    "/images/image12.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure that this logic runs only on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent SSR mismatch by rendering nothing initially
  }

  

  return (
    <div className="bg-blue-200 h-full">
      <div className="flex w-full relative">
        {/* Contents */}
        <div
          id="destination"
          className="section  text-black p-8 bg-white/10 border border-black/50 backdrop-blur-md rounded-lg max-w-4xl mx-auto mt-72 mb-48 ml-10"
        >
          <p className="text-4xl font-semibold mb-6">Tourism Destination</p>
          <div className="flex flex-col space-y-6">
            <p>
              Comprehensive analysis of Coron, Palawan tourism and hospitality
              industry: Coron, Palawan Known for its pristine marine ecosystems,
              historic dive sites, and colorful coral reefs inside the Coral
              Triangle—the global center of marine biodiversity—Coron, Palawan,
              stands out as one of the Philippines top ecotourism destinations.
              Its tourism industry has expanded rapidly; prior to the pandemic,
              arrivals rose by 25% yearly, reaching around one million tourists
              in 2019. With $424.5 million in revenue and over 8,500 employees,
              mostly in small-scale businesses, the industry is vital to the
              local economy. 85% of tourists are drawn to activities like
              diving, snorkeling, and touring historic shipwrecks, while
              improvements in transportation infrastructure have increased
              accessibility and supported the expansion of the tourism industry.
            </p>
            <p>
              But Coron has a lot of problems, especially with the damage that
              overtourism is doing to the ecology. Its sustainability is
              threatened by problems like pollution, disputes with nearby
              fishing villages, and damage to coral reefs caused by boats.
              Although the COVID-19 epidemic gave ecosystems a little break, it
              also brought attention to the areas reliance on tourism for
              economic growth. Initiatives like the Charter for Sustainable
              Tourism, which places a strong emphasis on adherence to
              environmental regulations and sustainable practices, have been put
              in place by Coron to address these issues. Adopting the UN idea of
              environmental carrying capacity could also assist strike a balance
              between resource conservation and visitor numbers. To preserve
              vulnerable areas while sustaining economic growth, future
              initiatives must concentrate on green tourism, community
              engagement, and strategic zoning. The ability of Coron to maintain
              its allure and natural beauty will depend on proactive regulations
              and cooperation from all parties involved. In order to guarantee
              that this special location prospers for many decades to come,
              sustainable tourism practices will be essential.
            </p>
          </div>
        </div>
        {/* Image Slider */}
        <div className="relative w-full max-w-4xl mx-auto mt-14 m-4">
          <div className="overflow-hidden shadow-lg h-80 m-[80px] md:h-[500px] lg:h-[900px] rounded-lg">
            <div
              className="flex transition-transform object-contain duration-200 ease-in-out"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {images.map((image, url) => (
                <div key={url} className="w-full flex-shrink-0">
                  <Image
                    src={image}
                    alt={`Slide ${url + 1}`}
                    layout="responsive"
                    width={10}
                    height={200}
                    priority={url === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          >
            &gt;
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-blue-500" : "bg-gray-400"
                } cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <div id="overview" className="flex flex-col w-full bg-blue-200 section">
        <div className="w-full">
          <p className="text-4xl font-semibold p-4 text-center">
            Overview of Coron, Palawan.
          </p>
          <div className="flex flex-col w-full">
            <div className=" bg-white/10 border border-black/50 backdrop-blur-md rounded-lg ml-16 mr-16">
              <p className="w-fit mb-6 ml-4 p-4 text-md">
                Palawan is an archipelagic province that extends from the
                southern tip of the Philippines to the northern border near
                Malaysia. It is made up of the main island of Palawan plus over
                1,700 smaller islands. With its magnificent beaches, glittering
                waters, and breathtaking landscape, Palawan is quickly rising to
                the top of the nation&apos;s tourist attractions list. It is
                known for its extraordinary natural beauty, rich cultural
                legacy, and vast biodiversity, giving it the nickname &quot;Last
                Frontier&quot;. One of the longest navigable subterranean rivers
                in the world is the Puerto Princesa subterranean River, which is
                classified as a UNESCO World Heritage Site. El Nido is famous
                for its tall limestone cliffs, lagoons, and vibrant coral reefs.
                Divers from all over the world come to the Tubbataha Reefs
                Natural Park, a marine sanctuary and UNESCO World Heritage Site.
                Palawan, a well-liked ecotourism and environmental tourism
                destination, is home to a diverse range of creatures, including
                the endangered Philippine tarsier and the Palawan peacock
                pheasant. The rich cultural heritage of the province is provided
                by indigenous communities including the Tagbanua and Palawan
                people
              </p>
            </div>
            <div className=" bg-white/10 border border-black/50 backdrop-blur-md rounded-lg ml-16 mr-16 m-4">
              <p className="w-fit mb-6 ml-4 p-4 text-md">
                Specifically, one of the province&apos;s most intriguing tourism
                destinations is Coron, a town on Busuanga Island in northern
                Palawan. In addition to its stunning landscapes and shimmering
                lakes, Coron is noted for its fascinating historical
                significance, particularly its World War II ships, many of which
                have been repurposed into artificial reefs at the world-famous
                dive site Coron Bay. These reefs are teeming with marine life
                and offer some of the world&apos;s greatest opportunities for
                wreck diving. Unlike the more crowded places like El Nido, the
                town itself is modest but attractive and has a laid-back vibe.
                One of its primary attractions is Kayangan Lake, which is
                thought to be among the cleanest lakes in the Philippines and is
                surrounded by stunning limestone cliffs.
              </p>
              <p className="w-fit mb-6 ml-4 p-4 text-md">
                It offers a peaceful environment for swimming or kayaking.
                Another must-see is the Twin Lagoons, where visitors may swim
                through a tiny hole between two lagoons separated by a limestone
                wall. Hiking Mount Tapyas offers visitors sweeping views of the
                town, other islands, and the ocean, while Siete Pecados Marine
                Park is a bustling underwater sanctuary perfect for snorkelling.
                Natural hot springs like Maquinit Hot Springs in Coron provide
                visitors the chance to relax in warm mineral waters while
                admiring beautiful scenery. Coron&apos;s calm, blue waters and
                plethora of marine life offer a sense of tranquility that is
                hard to find anywhere, in addition to being an excellent
                location for island hopping, diving, and snorkelling. Coron is a
                gem in Palawan&apos;s greater ecosystem of adventure and beauty
                because of its combination of ancient wrecks, pristine natural
                landscapes, and a peaceful setting.
              </p>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="flex w-full items-center mb-20 mt-4">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-[60%]"
            loop={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <Image
                src="/images/image7.jpg"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/image11.jpg"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/image6.jpg"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/image7.jpg"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/image8.jpg"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="rounded-3xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/image10.jpg"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="rounded-3xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg-blue-200">
        <div className="w-full text-center">
          <p className="text-4xl font-semibold mb-36 p-4">
            Historical Perspective
          </p>
        </div>
        <div className="flex w-full ">
          <div className="w-[50%] flex flex-col items-center  bg-white/10 border-2 border-black/50 backdrop-blur-md rounded-lg ml-14 hover:border-blue-800">
            <p className="text-2xl font-semibold text-center mt-20">
              Indigenous Tribes
            </p>
            <p className="text-lg m-4">
              It all started with the Tagbanua people, living in Coron for
              centuries and are believed to be one of the oldest tribes in the
              Philippines.The Tagbanua people have great spiritual bond with
              environment, honoring ancient traditions, specifically in relation
              with sea and forest for these are seen as sacred domains. Tagbanua
              people consider the sea as a source of life and realm of spirits,
              a belief that shaped much of Coron’s early history. Their culture,
              which involves complex rituals, dances, and scriptures has been
              preserved over generations. This strong bond with nature has
              played a key role in the long-standing preservation of Coron’s
              natural wonders. Today, visitors to Coron can still experience
              Tagbanwa culture, particularly during local festivals or by
              visiting the preserved cultural sites in the area.
            </p>
          </div>
          <div className="flex w-[50%] pl-28">
            <Image src="/images/history3.png" height={400} width={700} alt="" />
          </div>
        </div>
        <div className="flex w-full mt-36">
          <div className="flex w-[50%] pl-28">
            <Image src="/images/history1.png" height={400} width={700} alt="" />
          </div>
          <div className="w-[50%] flex flex-col items-center  bg-white/10 border-2 border-black/50 backdrop-blur-md rounded-lg mr-14 hover:border-blue-800">
            <p className="text-2xl font-semibold text-center mt-28 pr-14">
              Spanish Influence
            </p>
            <p className="text-lg m-14">
              During the 16th century of Spanish colonization, Coron was no
              exception. Spanish Influences greatly impacted Coron’s cultural
              and religious landscapes, Churches were established, people
              including the Tagbanua, were introduced to Christianity. Even
              though there is a limited presence in the archipelago, the
              colonizers manage to leave behind several architectural imprints,
              and Spanish-sounding names that still linger in Coron’s History.
            </p>
          </div>
        </div>
        <div className="flex w-full mt-36">
          <div className="w-[50%] flex flex-col items-center  bg-white/10 border-2 border-black/50 backdrop-blur-md rounded-lg ml-14 hover:border-blue-800">
            <p className="text-2xl font-semibold text-center mt-16">
              Shipwrecks during World War II (diving spots)
            </p>
            <p className="text-lg pt-4 m-4">
              One of the most captivating things in the history of Coron,
              Palawan, is tied to World War II. The area is known for the
              Japanese warships that sank and now rest beneath its waters, each
              with its own story to tell. In September 1944, American Soldiers
              carried out a surprise attack on the Japanese fleet hiding near
              Coron. The wrecks, including the Akitsushima and Irako Maru
              (ships) , became a popular dive site and stand as a reminder of
              the past.
            </p>
            <p className="mt-4 text-lg m-4">
              For divers and historians, exploring these majestic wrecks is a
              priceless experience. As time goes by, the sunken ships slowly
              emerges with marine life of creatures hanging under the ocean that
              highlights its beauty and gives the tourists a glimpse of Coron’s
              history.
            </p>
          </div>
          <div className="flex w-[50%] pl-28">
            <Image src="/images/history2.png" height={400} width={700} alt="" />
          </div>
        </div>
        <div className="flex w-full mt-36">
          <div className="flex w-[50%] pl-28">
            <Image src="/images/image3.jpg" height={400} width={700} alt="" />
          </div>
          <div className="w-[50%] flex flex-col items-center  bg-white/10 border-2 border-black/50 backdrop-blur-md rounded-lg mr-14 hover:border-blue-800">
            <p className="text-2xl font-semibold text-center mt-10">
              Rise of Tourism in Coron
            </p>
            <p className="text-lg m-6">
              After World War II, Coron Palawan entered a new era of
              transformation. Generations that followed after decades saw
              growing potential in Coron’s natural beauty and great history, and
              tourists took interest in them. As the Philippines grew into
              becoming a more accessible place internationally, Coron slowly
              rose as a top tourist destination. Attractions such as; Kayangan
              Lake, Twin Lagoon, and Siete Pecados Marine Park became more
              popular, encouraging tourists each year.
            </p>
            <p className="mt-2 text-lg m-6">
              During the 1970s to 80s, Coron began to attract tourists&apos;
              attention for its clear waters and magnificent reefs, drawing
              divers around the world. The local government worked with Tagbanua
              people to ensure that tourism won’t destroy the natural beauty of
              Coron and its ecosystem. The Tagbanua tribes receive the ancestral
              land titles to protect their heritage.
            </p>
          </div>
        </div>
        <div className="flex w-full mt-36">
          <div className="w-[50%] flex flex-col items-center  bg-white/10 border-2 border-black/50 backdrop-blur-md rounded-lg ml-14 hover:border-blue-800">
            <p className="text-2xl font-semibold text-center mt-10">
              Heritage Preservation: Today’s Time
            </p>
            <p className="text-lg m-6">
              In present time, the history of Coron Palawan is celebrated and
              preserved. The Tagbanua as custodians of the land continues to
              protect its heritage and environment, balancing tourism with it.
              They regulate the movements of tourists making sure that sacred
              spots are well-preserved for more generations to come. The natural
              beauty of Coron still is being taken care of, a proof of its true
              value to the people.
            </p>
            <p className="mt-4 text-lg m-6">
              Present-day Coron is a beautiful blend of its indigenous heritage,
              colonial past, and natural beauty. From its peaceful shores to the
              historic shipwrecks chilling beneath the waves, Coron’s legacy is
              a mesmerizing mix of culture, activities, and beliefs.
            </p>
          </div>
          <div className="flex w-[50%] pl-28">
            <Image src="/images/image5.jpg" height={400} width={700} alt="" />
          </div>
        </div>
      </div>
      <div
        id="classification"
        className="flex flex-col w-full bg-blue-200 border-gray-100 section"
      >
        <div>
          <p className="text-4xl font-semibold p-4 mt-24 text-center">
            Characteristics and classification of tourism forms
          </p>
          <p className="text-lg p-4 pl-14 text-center">
            Coron, Palawan, is one of the tourist destinations in the
            Philippines known for its pristine natural beauty. Enjoying its
            countless limestone cliffs, turquoise waters, coral reefs, and
            wealthy biodiversity. Based on visitors’ activities, characteristics
            and motivations, multiple forms classify tourism in Coron.
          </p>
          <div className="flex flex-wrap justify-center gap-6 p-6 mt-10 mb-10">
            {/* First Card */}
            <div
              className={`transition-all duration-300 p-6 max-w-sm w-[300px] h-[300px] text-center rounded-md bg-blue-100 ${
                isHovered
                  ? "shadow-lg border-2 border-blue-200"
                  : "shadow-sm border-2 border-gray-300"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Nature-Based Tourism
              </h1>
              <p className="mt-10 text-gray-600">
                - Tourists know Coron for its beautiful attractions like
                Kayangan Lake, Twin Lagoon, and Maquinit Hot Springs.
              </p>
              <p className="mt-4 text-gray-600">
                - Visitors love its special geological formations and
                crystal-clear lakes.
              </p>
            </div>

            {/* Second Card */}
            <div
              className={`transition-all duration-300 p-6 max-w-sm w-[300px] h-[300px] text-center rounded-md ${
                isHovered
                  ? "shadow-lg border-2 border-blue-600"
                  : "shadow-sm border-2 border-gray-300"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Marine and Adventure Tourism
              </h1>
              <p className="mt-2 text-gray-600">
                - Adventure and marine tourism engage enthusiasts who seek
                energizing experiences while exploring nature&apos;s beauty.
              </p>
              <p className="mt-2 text-gray-600">
                - Scuba diving, snorkeling, kayaking, island hopping, and
                freediving thrive in this area.
              </p>
            </div>

            {/* Third Card */}
            <div
              className={`transition-all duration-300 p-6 max-w-sm w-[300px] h-[300px] text-center rounded-md bg-blue-100 ${
                isHovered
                  ? "shadow-lg border-2 border-blue-200"
                  : "shadow-sm border-2 border-gray-300"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Cultural and Heritage Tourism
              </h1>
              <p className="mt-2 text-gray-600">
                - Heritage tourism, and ethnic experiences attract travelers who
                are keen on learning about indigenous cultures.
              </p>
              <p className="mt-2 text-gray-600">
                - Visitors can learn about Tagbanua traditions and explore
                sustainable practices.
              </p>
            </div>

            {/* Fourth Card */}
            <div
              className={`transition-all duration-300 p-6 max-w-sm w-[300px] h-[300px] text-center rounded-md ${
                isHovered
                  ? "shadow-lg border-2 border-blue-600"
                  : "shadow-sm border-2 border-gray-300"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Beach, Leisure and Wellness Tourism
              </h1>
              <p className="mt-4 text-gray-600">
                - Relaxation and recreation: focuses on Coron’s beautiful
                beaches and resorts.
              </p>
              <p className="mt-4 text-gray-600">
                - Natural therapies like Maquinit Hot Springs are known for
                their healing properties.
              </p>
            </div>

            {/* Fifth Card */}
            <div
              className={`transition-all duration-300 p-6 max-w-sm w-[300px] h-[300px] text-center rounded-md bg-blue-100 ${
                isHovered
                  ? "shadow-lg border-2 border-blue-200"
                  : "shadow-sm border-2 border-gray-300"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Dive Tourism
              </h1>
              <p className="mt-10 text-gray-600">
                - Underwater exploration: Coron Wreck Dive Sites, World War II
                shipwrecks, and Coral Gardens.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-4xl font-semibold pb-16">
            Tourism Sectors in the destination
          </p>
        </div>
        <div className="flex w-full">
          <div className="w-full">
            <div className="border-2 border-gray-400 rounded-lg mx-14 my-12">
              <p className="font-semibold text-xl pl-6 pb-4 mt-10">
                Attraction
              </p>
              <p className=" text-md pl-6 mb-10">
                - Coronis one of the most famous tourist attractions here in
                Palawan, Philippines. It is also known for its pristine and
                stunning beaches, as well as crystal clear waters. These tourist
                attractions are one of the top reasons why tourists and visitors
                are going to Coron.
                <br />- Tourist attractions are Kayangan Lake, Atwayan Beach,
                Banana Island, Barracuda Lake, etc.
              </p>
            </div>
            <div className="border-2 border-gray-400 rounded-lg mx-14 ">
              <p className="font-semibold text-xl pl-6 pb-4 mt-10">
                Accommodation
              </p>
              <p className=" text-md pl-6 mb-10">
                Accommodations here in Coron are hotels, resorts, inns, hostels,
                guesthouse and many more. These accommodations have affordable,
                budget–friendly and expensive or luxurious options, which
                tourists and visitors can choose from. Good accommodation
                facilities can help people to have safe and comfortable places
                to stay. <br /> This sector can affect the guests’ overall
                satisfaction and length of stay.
                <br />
                Accommodations are: <br /> <br /> ● CoronBackpacker Guesthouse
                (Php 537 per night) <br /> ● BAMBAMHostel (Php 910 per night){" "}
                <br /> ● CoronHilltop View Resort (Php 1,747 per night) <br /> ●
                Dianna’s Inn (Php 1,802 per night)
                <br />● CoronGateway Hotel & Suites (Php 1,883 per night) <br />{" "}
                ● BlueWaters Inn Coron (Php 2,429 per night) <br /> ● Sunlight
                Hotel Coron (Php 2,834 per night) <br /> ● CoronWestownResort
                (Php 3,515 per night) <br /> ● ZuriResort (Php 5,975 per night){" "}
                <br /> ● TheFunny Lion– Coron Hotel (Php 6,552 per night) <br />{" "}
                ● Discovery Coron (Php 13,972) <br /> ● TwoSeasonsCoron Island
                Resort (Php 24,570 per night) and etc.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="mr-36 mt-14">
              <div className="flex gap-4">
                <div className="h-[400px] w-[300px] relative">
                  <Image
                    className="rounded-lg object-cover"
                    src="/images/PalawanImage.jpg"
                    alt=""
                    layout="fill" // Ensures the image fills the container
                  />
                </div>
                <div className="h-[400px] w-[300px] relative">
                  <Image
                    className="rounded-lg object-cover"
                    src="/images/PalawanImage5.jpg"
                    alt=""
                    layout="fill" // Ensures the image fills the container
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="h-[400px] w-[300px] relative">
                  <Image
                    className="rounded-lg object-cover"
                    src="/images/PalawanImage2.jpg"
                    alt=""
                    layout="fill" // Ensures the image fills the container
                  />
                </div>
                <div className="h-[400px] w-[300px] relative">
                  <Image
                    className="rounded-lg object-cover"
                    src="/images/PalawanImage4.jpg"
                    alt=""
                    layout="fill" // Ensures the image fills the container
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full mt-28">
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Food and Beverage
            </p>
            <p className=" text-md pl-6 mb-10">
              Coron has many dining options with various local and international
              cuisines that are available for all customers.
              <br />
              Restaurants here in Coron are:
              <br /> <br />● KTM–BurgerNight (American Fast Food) <br /> ●
              RamenSakura(Japanese Restaurant) <br /> ● Island Boy Grill
              (Filipino Restaurant) <br /> ● Lutgardo’s Restaurant & Sunset Bar
              (Italian & Filipino Restaurant) <br /> ● Asia Grand View Hotel
              Restaurant (Filipino & International Restaurant) <br /> ● Lobster
              King (Filipino Restaurant) <br /> ● Inasal Eats Coron (Filipino
              Restaurant) <br /> ● Karl’s BBQ (Filipino Restaurant) <br /> ●
              EpicCafé Coron (European Cafe) <br /> ● GetRealBar &Restaurant
              (Mexican and Filipino Restaurant) <br /> ● Kaison Restaurant
              (Chinese Restaurant) <br /> ● Pacifico Coron (International
              Restaurant) <br /> ● Alfresco Coron (International Restaurant) and
              etc.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Travel trade
            </p>
            <p className=" text-md pl-6 mb-10">
              Travel trade includes the tour operators, online travel agents,
              wholesalers, travel agents and receptive tour operators.
              <br /> DOT–Accredited Tour Operators here in Coron are the
              following: <br /> <br /> ● ICapture Travel Services <br />●
              MyBlueBackpack Travel and Tours <br /> ● Royal Tropical Travel &
              Tours <br /> ● Laughtrip Travel and Tours <br /> ● Psyche JTravel
              & Tours <br /> ● Seabright Travel and Tours <br /> ● Island
              Travellers Travel and Tours <br /> ● Mango–Cruise Travel and Tours
              etc.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Adventure / outdoor recreation
            </p>
            <p className=" text-md pl-6 mb-10">
              ● Coronis a place for outdoor recreation and adventure too,
              because of its wonderful landscapes and waters <br /> that are
              crystal clear. <br /> ● Outdoor activities here in Coron include:
              swimming, island hopping, safari tour, parasailing, etc.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Transportation
            </p>
            <p className=" text-md pl-6 mb-10">
              Tourists and visitors have many options for transportation here in
              Coron. <br /> Here are the following transportation options:{" "}
              <br /> <br />● Airplane <br /> ● Motorcycle <br /> ● Tricycle{" "}
              <br /> ● Bicycle <br /> ● Van <br /> ● CarRentals <br /> ● Taxi{" "}
              <br /> ● Shuttle <br /> ● Ferry <br /> ● LuxuryYacht
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Events / MICE
            </p>
            <p className=" text-md pl-6 mb-10">
              ● Herein Coron, there are hotels that have facilities for events,
              meetings, occasions, gatherings and parties. <br /> ● Thefollowing
              hotels in Coron have events place and facilities: Discovery Coron,
              Sunlight Hotel Coron, <br /> TAG Resort Coron Palawan, Zuri Resort
              Coron, etc.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Tourism services
            </p>
            <p className=" text-md pl-6 mb-10">
              ● The tourism services here in Coron are accommodations,
              transportations, travel agencies, tour operators, food and
              beverages, spa and wellness, as well as adventure activities.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-lg mx-14 mb-4">
            <p className="font-semibold text-xl pl-6 pb-4 mt-10">
              Gaming & Entertainment
            </p>
            <p className=" text-md pl-6 mb-10">
              ● Coronhas entertainment services offered in their popular bars,
              restaurants, hotels and resorts. <br /> ● BamBarCoron–Bar with
              European, Filipino and Asian Cuisines, Live Shows or Concerts{" "}
              <br /> ● TheBrewhouse Coron– Resto– Bar with European,
              International and Asian Cuisines, Craft Beer, <br /> Live Shows or
              Concert <br /> ● Zuri Resort Coron– Game Room (Ping Pong Table,
              Billiards and Board Games), Bar & Lounge with <br /> Live Shows or
              Concerts and etc.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center mb-20 mt-10 bg-blue-200">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-[60%]"
            loop={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video8.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video9.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="rounded-3xl"
                controls
                width="100%"
                height="auto"
                loop
                muted
              >
                <source src="/images/video10.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            {/* You can continue adding more video slides in the same way */}
          </Swiper>
        </div>
        <div id="impacts" className="w-full flex flex-col mt-10 section">
          <div id="impacts" className="bg-white/10 mr-14 ml-14">
            <p className="font-semibold text-4xl text-center mb-10">
              Impacts of tourism activities in the destination
            </p>
            <p className="p-4 text-center text-lg border-2 border-black/50 backdrop-blur-md rounded-lg">
              Tourism activities in Coron Town, Palawan Island, present a
              complex interplay of both positive and negative impacts on the
              destination. This report details these multifaceted effects,
              highlighting the significance of balancing economic growth with
              environmental and cultural preservation.
            </p>
          </div>
          <div>
            <p className="font-semibold text-2xl p-6 mt-10">
              Positive Impacts of Tourism
            </p>
            <p className=" text-lg border-2 border-black/50 backdrop-blur-md rounded-lg hover:border-blue-500 mr-14 ml-14 p-2">
              Tourism in Coron has various advantages that notably enhance the
              local economy and community life. <br /> <br /> Economic Growth:
              Tourism serves as a crucial driver of economic development in
              Coron. It creates numerous employment opportunities across
              different sectors, such as hospitality, transportation, and local
              crafts. As visitors flock to the area, businesses ranging from
              luxury accommodations to small eateries benefit from increased
              patronage, stimulating overall economic activity. <br /> <br />
              Infrastructure Development: The rise in tourist numbers
              necessitates improvements to infrastructure, including roads,
              transportation options, and communication systems. Investments in
              these areas not only benefit tourists but also enhance the quality
              of life for local residents by providing better connectivity and
              access to services. <br /> <br /> Cultural Exchange: Tourism
              fosters cultural interactions that enrich both visitors and
              locals. Tourists gain insights into local traditions, cuisine, and
              history, while residents may find pride in showcasing their
              heritage. This exchange can lead to increased efforts to preserve
              cultural practices and promote community identity. <br /> <br />
              Environmental Conservation Efforts: With a focus on sustainable
              tourism practices, many local operators engage in initiatives
              aimed at preserving Coron’s natural beauty. Activities such as
              coral reef restoration and the establishment of protected marine
              areas help protect biodiversity and promote environmental
              awareness among both locals and tourists. <br /> <br /> Investment
              in Community Services: Revenue generated from tourism can lead to
              improvements in community services, including healthcare,
              education, and sanitation. As tourism flourishes, there is often a
              parallel enhancement of public amenities that benefits both
              visitors and the local population.
            </p>
          </div>
          <div>
            <p className="font-semibold text-2xl p-6  mt-4">
              Negative Impacts of Tourism
            </p>
            <p className=" text-lg border-2 border-black/50 backdrop-blur-md rounded-lg hover:border-blue-500 mr-14 ml-14 p-2">
              While tourism offers many benefits, it also poses challenges that
              can impact the community and environment. <br /> <br />{" "}
              Environmental Degradation: Increased tourist activities may strain
              local ecosystems. Activities such as snorkeling and diving can
              result in coral reef damage, pollution, and disturbances to
              wildlife. The pressure on natural resources can threaten the
              fragile balance of the area&apos;s rich biodiversity. <br />{" "}
              <br /> Overcrowding: Popular destinations within Coron, such as
              Kayangan Lake and Barracuda Lake, can become overcrowded,
              particularly during peak tourist seasons. This influx can diminish
              the experience for visitors and lead to strain on local resources
              and infrastructure, causing congestion and stress on the
              environment. <br /> <br /> Cultural Disruption: The
              commercialization of local culture to meet tourist expectations
              can alter traditional practices and lifestyles. As local customs
              are modified for tourism appeal, there may be a loss of
              authenticity and cultural identity among residents. <br /> <br />{" "}
              Waste Management Challenges: An increase in visitors leads to
              higher waste production, often overwhelming local waste management
              systems. Insufficient disposal methods can result in litter,
              pollution, and negative impacts on both the environment and
              community health. <br /> <br /> Economic Dependency: While tourism
              can boost incomes, over-reliance on this sector can create
              vulnerabilities. Economic downturns, natural disasters, or global
              events (such as pandemics) can dramatically affect visitor numbers
              and, consequently, the local economy. <br /> <br /> Resource
              Depletion: High tourist numbers can place excessive demands on
              local resources, such as water and energy. This can result in
              shortages and implications for local residents who depend on these
              resources for their daily needs.
            </p>
          </div>
        </div>
        <div className="w-full mt-20">
          <p className="text-4xl font-semibold pl-6 mb-10">
            SDGissues or concerns evident in Coron, Palawan
          </p>
        </div>
        <div className="w-full flex">
          <div className="w-full border-gray-300 transition-shadow duration-500 hover:shadow-2xl  hover:bg-blue-100 p-4">
            <p className="text-xl w-full pl-2 font-semibold">
              SDG12: Responsible Consumption and Production: Promotes
              sustainable waste management and reduced environmental impact.
              SDG14: Life Below Water: Focuses on conserving marine ecosystems
              and preventing pollution.
            </p>
            <p className="pl-2 text-lg mt-10">
              Due to inadequate garbage disposal infrastructure, Coron&apos;s
              expanding tourism industry has resulted in a waste management
              catastrophe. Waste frequently builds up in reclamation areas and
              along coasts, even though tourists are required to pay an
              environmental fee of PHP 200. Marine biodiversity, which is
              essential to Coron&apos;s economy and reputation as an ecotourism
              destination, is under danger due to this pollution. To properly
              handle these problems, local stakeholders have demanded improved
              governance and infrastructure.
            </p>
            <p className="text-xl w-full pl-2 font-semibold mt-10">
              SDG14: Life Below Water: Necessity of defending marine
              biodiversity from pollution, overfishing, and coral degradation.
            </p>
            <p className="pl-2 text-lg mt-10">
              Marine habitats are stressed by tourism-related activities like
              diving and island visits in Coron. Boat anchoring and uncontrolled
              operations have harmed coral reefs, which are vital for
              biodiversity and coastal protection. The necessity for sustainable
              tourism approaches that strike a balance between environmental
              preservation and economic rewards is highlighted by the efforts of
              indigenous communities, such as the Tagbanua tribe, who co-manage
              natural resources.
            </p>
          </div>
          <div className="w-full border-gray-300 transition-shadow duration-500 hover:shadow-2xl  hover:bg-blue-100 p-4">
            <p className="text-xl w-full pl-2 font-semibold">
              SDG8: Decent Work and Economic Growth: Promotes equitable economic
              gains from tourism SDG10: Reduced Inequalities: Fair access to
              opportunities and resources
            </p>
            <p className="pl-2 text-lg mt-10">
              Many residents make money from tourism, but the advantages are not
              shared equitably. Indigenous communities are displaced and have
              less access to tourism-related income. In order to guarantee that
              everyone benefits from Coron&apos;s economic expansion, there is
              an increasing push for fair possibilities through
              capacity-building initiatives and collaborations with other
              communities.
            </p>
            <p className="text-xl w-full pl-2 font-semibold mt-10">
              FORSDG12 (Responsible Production and Consumption)
            </p>
            <p className="pl-2 text-lg mt-10">
              - Community-Based Recycling Programs: In order to convert
              collected plastic garbage into reusable items, efforts are being
              made to set up community-managed waste recycling facilities. For
              instance, it has been suggested to use waste-to-brick technology
              to turn non-biodegradable garbage into environmentally friendly
              building blocks. <br /> <br />- Rubbish Education with a Tourism
              Focus: A few Coron resorts have launched initiatives to teach
              visitors how to properly dispose of their rubbish. Additionally,
              they forbid single-use plastics and offer environmentally
              beneficial substitutes like reusable water bottles.
            </p>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-full border-gray-300 transition-shadow duration-500 hover:shadow-2xl  hover:bg-blue-100 p-4">
            <p className="text-xl w-full pl-2 font-semibold">
              FORSDG14(Life below water)
            </p>
            <p className="pl-2 text-lg mt-10">
              ● Eco-Tourism Regulations: To stop boat anchors from harming coral
              reefs, Coron has tightened rules for island-hopping tours,
              including the establishment of approved mooring zones. <br />{" "}
              <br /> ● Marine Protected Areas (MPAs): By limiting destructive
              practices like overfishing and dynamite fishing and encouraging
              ecotourism, partnerships with the Tagbanua tribe have increased
              the number of MPAs surrounding Coron. <br /> <br /> ●
              Reef Rehabilitation Projects: Under the direction of local NGOs and
              diving operators, efforts are being made to repair damaged coral
              reefs using coral gardening techniques.
            </p>
          </div>
          <div className="w-full border-gray-300 transition-shadow duration-500 hover:shadow-2xl hover:bg-blue-100 p-4">
            <p className="text-xl w-full pl-2 font-semibold">
              FORSDG10 (Reduced Inequalities) and SDG 8 (Decent Work and
              Economic Growth)
            </p>
            <p className="pl-2 text-lg mt-10">
              ● Cultural Tourism Initiatives: Programs incorporate cultural
              tours and seminars into tourism activities to showcase the
              heritage of the Tagbanua people. The money made from these
              endeavors goes toward community development initiatives. <br />
              <br /> ● Building Local Capacity: Eco-tourism and sustainable
              tourist management training sessions have given locals the
              know-how to run enterprises, conduct tours, and safeguard the
              environment. <br />
              (reports on collaborative efforts to include indigenous
              communities in Coron’s tourism)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
