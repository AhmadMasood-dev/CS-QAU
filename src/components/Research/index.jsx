import { hci, knowlegeEng, NetworkCom } from "../../assets/images";

function Research() {
  return (
    <div>
      <section class="text-white bg-accent-dark body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2  ">
              Research
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-300">
              Research in the department is carried out in research areas of
              faculty's interest through research groups.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden transition duration-300 transform border rounded-lg shadow border-primary border-opacity-60 hover:-translate-y-2 hover:shadow-xl">
                <img
                  className="object-cover object-center w-full lg:h-48 md:h-36"
                  src={hci}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium title-font">
                    Human Information Interaction
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Investigates all aspects of information usage by humans.
                    Research focus varies for information seeking behavior,
                    Information Interaction Techniques, Storage and Retrieval
                    models/frameworks for structured and unstructured
                    information, and information services for human information
                    needs.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full overflow-hidden transition duration-300 transform border rounded-lg shadow border-primary border-opacity-60 hover:-translate-y-2 hover:shadow-xl">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={knowlegeEng}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium  mb-3">
                    Knowledge Engineering
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Focuses on analyze of data, metadata and knowledge using
                    supervised and unsupervised mining algorithms. The target
                    areas will be software architecture, web services and
                    overlay networks. The main goal is to process related and
                    uncorrelated facts and extract meaningful contextual
                    knowledge for quality decision making.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full overflow-hidden transition duration-300 transform border rounded-lg shadow border-primary border-opacity-60 hover:-translate-y-2 hover:shadow-xl">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={NetworkCom}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium  mb-3">
                    Networking and Communication
                  </h1>
                  <p class="leading-relaxed mb-3">
                    This group focuses on applied research in networking,
                    security, and distributed systems. Key areas include IoT,
                    cloud computing, smart environments, cybersecurity, and
                    performance analysis of modern web and network systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
