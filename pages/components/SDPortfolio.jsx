import { BsGithub } from "react-icons/bs";
import { SiTableau } from "react-icons/si";

const SDPortfolio = () => {
  return (
    <section class="bodyv2">
    
      <div class="containerv2">
        <div class = "floatcontainer">
        

        <div class="card">
          <div class="face face1 ">
            <div class="content  ">
            <img src="weatherappbg.png" className="object-cover" />
            </div>
          </div>
          <div class="face face2">
            <div class="content ">
              <p>Weather Application for any City in the World</p>
              <p class="text-gray-500">
                <small>React Nextjs OpenWeatherAPI Google API (Coming soon)</small>
              </p>
              <button></button>
              <div class="justify-center ">
                <div>
                  <a
                    className=" cursor-pointer "
                    href="https://github.com/Jazz-Harris/WeatherApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                    >
                      <span class="w-3 mr-2 mt-1">
                        <BsGithub />
                      </span>
                      Github
                    </button>
                  </a>
                  <div>
                    <a
                    className=" cursor-pointer "
                    href="https://weatherapp-jazzharris.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    >
                      <button
                        type="button"
                        class=" px-2  pb-2 pt-2.5 hover:animate-pulse bg-cyan-400 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                      >
                        <span class="w-3 mr-2 mt-1">
                        <img src="https://img.icons8.com/ios-filled/50/000000/tableau-software.png"/>
                        </span>
                        LIVE Version
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
       
        <div class ="floatcontainer">
        <div class="card">
          <div class="face face1 ">
            <div class="content  ">
            <img src="comingsoon.jpg" />
            </div>
          </div>
          <div class="face face2">
            <div class="content ">
              <p>COVID19 Data Visualization Using Python</p>
              <p class="text-gray-500">
                <small>Python Pandas Numpy Plotly Matplotlib</small>
              </p>
              <button></button>
              <div class="justify-center ">
                <div>
                  <a
                    className=" cursor-pointer "
                    href="https://github.com/Jazz-Harris/COVID19DataVIS/blob/main/COVID19DataVis.ipynb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                    >
                      <span class="w-3 mr-2 mt-1">
                        <BsGithub />
                      </span>
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      
        </div>

        <div class="card">
          <div class="face face1 ">
            <div class="content  ">
            <img src="comingsoon.jpg" />
            </div>
          </div>
          <div class="face face2">
            <div class="content ">
              <p>Webscraping RealEstate data with Python and BeautifulSoup</p>
              <p class="text-gray-500">
                <small>Python BeautifulSoup</small>
              </p>
              <button></button>
              <div class="justify-center ">
                <div>
                  <a
                    className=" cursor-pointer "
                    href="https://github.com/Jazz-Harris/WebScrapingRealEstateData"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      class=" px-2  pb-2 pt-2.5 mr-2 hover:animate-pulse bg-cyan-400 float-left text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex align-center"
                    >
                      <span class="w-3 mr-2 mt-1">
                        <BsGithub />
                      </span>
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default SDPortfolio;
