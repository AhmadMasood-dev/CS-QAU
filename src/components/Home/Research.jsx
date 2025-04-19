import React from "react";
import { cloud, database, network } from "../../assets/images";

function Research() {
  return (
    <div>
      <section class="text-gray-400 bg-accent-dark body-font">
        <div class="container px-5 pb-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white text-center pb-20">
            Research
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={network}
                />
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Human Information Interaction
                </h2>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <p class="leading-relaxed ">
                  Investigates all aspects of information usage by humans.
                  Research focus varies for information seeking behavior,
                  Information Interaction Techniques, Storage and Retrieval
                  models/frameworks for structured and unstructured information,
                  and information services for human information needs
                </p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={cloud}
                />
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Knowledge Engineering
                </h2>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <p class="leading-relaxed">
                  Focuses on analyze of data, metadata and knowledge using
                  supervised and unsupervised mining algorithms. The target
                  areas will be software architecture, web services and overlay
                  networks. The main goal is to process related and uncorrelated
                  facts and extract meaningful contextual knowledge for quality
                  decision making.
                </p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={database}
                />
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Networking and Communication
                </h2>

                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <p class="leading-relaxed">
                  This group investigates the applied aspects in the domains of
                  networking, communication, security and privacy. The research
                  group focuses on a number of areas including but not limited
                  to computer networks, distributed systems, mobile Agent-based
                  distributed systems, routing protocols, peer-to-peer
                  computing, security and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
