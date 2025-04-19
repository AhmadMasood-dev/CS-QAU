import { dept2 } from "../../assets/images";

function About() {
  return (
    <div>
      <section class="text-gray-400 bg-accent-dark body-font">
        <div class="container h-lvh mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2  md:pr-10  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
              Introduction
            </h1>
            <p class="mb-8 leading-relaxed">
              The Department of Computer Sciences at Quaid-i-Azam University,
              established in 1976, is recognized among the top three computer
              science departments in Pakistan according to QS and Times Higher
              Education (THE) rankings. It aims to produce highly skilled
              computer scientists to meet national and global demands. The
              department offers a range of degree programs including PhD, MPhil,
              MS (IST), MS (Data Science), and BS in Computer Science. Its
              graduates have excelled in both academia and industry worldwide.
              The curriculum is regularly updated to align with current
              technological and academic objectives.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={dept2}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
