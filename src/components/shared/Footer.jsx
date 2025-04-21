import { qau_logo } from "../../assets/images";

function Footer() {
  return (
    <div>
      <footer class="text-gray-400 bg-accent-dark body-font">
        <div class="container px-5 pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-96 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img
                src={qau_logo}
                alt=""
                class="w-16 h-16 text-white p-2  rounded-full"
              />

              <span class="ml-3 text-xl">QAU</span>
            </a>

            <p class="mt-2 text-sm text-gray-200 leading-8 ">
              Department of Computer Sciences
            </p>
            <p class="mt-2 text-sm text-gray-200 leading-8 ">
              Quaid-i-Azam University,
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/2 md:w-1/2 w-full px-4 ">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Our Programs
              </h2>
              <nav class="list-none mb-10 leading-10  ">
                <li>
                  <a class="text-gray-400 hover:text-white">
                    {" "}
                    PhD (Computer Science)
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    MS (Information Science & Technology)
                  </a>
                </li>

                <li>
                  <a class="text-gray-400 hover:text-white">
                    MPhil (Computer Science)
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    MS (Data Science)
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    BS (Computer Science)
                  </a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Contact US
              </h2>
              <nav class="list-none mb-10 leading-10 ">
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Islamabad 45320, Pakistan
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Email: cs@qau.edu.pk
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">
                    Phone: +92-51-9064 2057
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-accent-dark bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-400 text-sm text-center sm:text-left">
              © 2020 CS —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-500 ml-1"
                target="_blank"
              >
                @AhmadMasood
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
