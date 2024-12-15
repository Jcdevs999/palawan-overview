import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full backdrop-blur-md p-6 rounded transition-all ease-in-out duration-500 bg-blue-300">
        <div className="container mx-auto flex justify-between items-center"></div>
        <div className="mt-8 text-center text-sm text-black">
          <p className="text-md font-semibold">
            Leader: <br /> Managdag, Cassandra Nea <br /> <br /> Members: <br /> Condez, Alexis Estelle <br />
            Epistola,Lewis Chelsea <br /> Sta. Rita, Ehra Zabrea <br /> Tan, Lheian Crayl <br />
            Vale, Esther Zillah <br /> <br />
          </p>
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Coron, Palawan. All Rights
            Reserved.
          </p>
          <p className="mt-2">
            <strong>CITATIONS:</strong>
          </p>
          <div className="mt-2 text-xs text-black space-y-1">
            <p>https://www.jstage.jst.go.jp/ https://bimp-eaga.asia/</p>
            <p>
              Travel Palawan. (2024, October 15). Discovering Palawan: About the
              Island | Palawan Travel Guide.{" "}
              <a
                href="https://www.travel-palawan.com/about-palawan/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.travel-palawan.com/about-palawan/
              </a>
            </p>
            <p>https://www.unesco.org/en/mab/Palawan</p>
            <p>https://au.hotels.com/go/philippines/palawan</p>
            <p>
              Karl. (2024, December 2). History of Coron Palawan unveiling its
              rich heritage. Best diving in the Philippines.{" "}
              <a
                href="https://bestdivingphilippines.com/the-rich-history-of-coron-palawan/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bestdivingphilippines.com/the-rich-history-of-coron-palawan/
              </a>
            </p>
            <p>
              Destination British Columbia. (2018, May 23). Travel Trade.
              Destination BC Corp.{" "}
              <a
                href="https://www.destinationbc.ca/what-we-do/marketing/travel-trade/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.destinationbc.ca/what-we-do/marketing/travel-trade/
              </a>
            </p>
            <p>
              Discovery Coron. (2024). Celebrations and Special Dinners.
              Discovery Coron.{" "}
              <a
                href="https://www.clubparadisepalawan.com/meetings-events/celebrations-and-special-dinners"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.clubparadisepalawan.com/meetings-events/celebrations-and-special-dinners
              </a>
            </p>
            <p>
              El Río Y Mar. (2017). Facilities. Elrioymar.com.{" "}
              <a
                href="https://www.elrioymar.com/facilities/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.elrioymar.com/facilities/
              </a>
            </p>
            <p>
              Klook. (2024, March 15). Where to Beach: The 11 Most Stunning
              Beaches in Coron Island.{" "}
              <a
                href="https://www.klook.com/en-PH/blog/coron-island-beaches/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.klook.com/en-PH/blog/coron-island-beaches/
              </a>
            </p>
            <p>
              Sunlight Hotel Coron. (2023). Events. SHR.{" "}
              <a
                href="https://www.sunlighthotelsandresorts.com/shc-events"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sunlighthotelsandresorts.com/shc-events
              </a>
            </p>
            <p>
              TAG Resort Coron Palawan. (2024, July 18). EVENTS VENUE. TAG
              Resort.{" "}
              <a
                href="https://tagresorts.com.ph/events-venue/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tagresorts.com.ph/events-venue/
              </a>
            </p>
            <p>
              The Poor Traveler. (2022, October 27). Accredited Tour Operators
              in Coron, Palawan. The Poor Traveler Itinerary Blog.{" "}
              <a
                href="https://www.thepoortraveler.net/coron-palawan-resorts-hotels/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.thepoortraveler.net/coron-palawan-resorts-hotels/
              </a>
            </p>
            <p>
              Tripadvisor Philippines. (2024). Bam Bar Coron. Tripadvisor.{" "}
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g23389410-d27150240-Reviews-Bam_Bar_Coron-Coron_Town_Proper_Coron_Busuanga_Island_Palawan_Province_Mimaropa.html"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.tripadvisor.com/Restaurant_Review-g23389410-d27150240-Reviews-Bam_Bar_Coron-Coron_Town_Proper_Coron_Busuanga_Island_Palawan_Province_Mimaropa.html
              </a>
            </p>
            <p>
              Tripadvisor Philippines. (2024). Coron, Philippines Hotel Deals.
              Tripadvisor.{" "}
              <a
                href="https://www.tripadvisor.com.ph/SmartDeals-g729733-Coron_Busuanga_Island_Palawan_Province_Mimaropa-Hotel-Deals.html"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.tripadvisor.com.ph/SmartDeals-g729733-Coron_Busuanga_Island_Palawan_Province_Mimaropa-Hotel-Deals.html
              </a>
            </p>
            {/* You can continue listing the rest of the citations similarly */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
