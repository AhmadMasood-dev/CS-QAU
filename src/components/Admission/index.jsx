const academicPrograms = [
  {
    category: "Every Semester",
    heading: "PhD (Computer Science)",
    description:
      "PhD is the highest degree awarded in an academic discipline. In our PhD programme, students work closely with a faculty member, performing original research, and tackling challenging and unsolved problems.",
    requirements: {
      a: "MPhil (Computer Science or computing related discipline)",
      b: "MS (18 years Education) with Computer Science or computing related discipline",
      c: "Must pass the test and interview arranged by the department",
    },
    link: "https://cs.qau.edu.pk/Phd.php",
  },
  {
    category: "Fall Semester",
    heading: "MPhil (Computer Science)",
    description:
      "The objective of M.Phil Computer Science program is to train students to initiate research work.",
    requirements: {
      a: "M.Sc. (Computer Science, Software Engineering, Information Technology)",
      b: "4 years BS (CS, SE, IT)",
      c: "Must pass test (sample test available) and interview arranged by the department",
    },
    link: "https://cs.qau.edu.pk/Mphil.php",
  },
  {
    category: "Every Semester",
    heading: "MS (Information Science & Technology)",
    description:
      "The aim is to design and develop information applications using IT by understanding the relationship between digital information, people, and technology.",
    requirements: {
      a: "16 years of education: BS (4 years) or MSc in computing-related disciplines",
      b: "Experience in digital information management",
      c: "Must pass test and interview arranged by the department",
    },
    link: "https://cs.qau.edu.pk/MS-IST.php",
  },
  {
    category: "Every Semester",
    heading: "MS (Data Science)",
    description:
      "Students are exposed to programming, data analysis, visualization, and big data analytics. It prepares them for careers and further PhD in data science.",
    requirements: {
      a: "BS or MSc (16 years) in computing disciplines",
      b: "OR BS/MSc (non-computing) with 2 math + 1 stats courses in final degree",
      c: "Must pass non-credit deficiency courses (if needed) and departmental test/interview",
    },
    link: "https://cs.qau.edu.pk/MS-DS.php",
  },
  {
    category: "Fall Semester",
    heading: "BS (Computer Science)",
    description:
      "Trains graduates to design, implement, and manage systems with computational, communication, and multimedia capabilities.",
    requirements: {
      a: "Intermediate with Mathematics",
      b: "FSc pre-medical with Additional Mathematics",
      c: "Or equivalent 12-year education with Mathematics",
    },
    link: "https://cs.qau.edu.pk/BS.php",
  },
];

function Admissions() {
  return (
    <div>
      <section class="text-white bg-accent-dark body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl text-white font-medium title-font mb-2  ">
              Admissions
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-300">
              Admission in the department for various degree programmes are
              offered in Spring and Fall semesters.
            </p>
          </div>
          <div class="flex flex-wrap -m-12">
            {academicPrograms.map((programs, index) => (
              <div class="p-12 md:w-1/2 flex flex-col items-start" key={index}>
                <span class="inline-block py-1 px-2 rounded bg-indigo-50 font-bold text-accent text-xs  tracking-widest">
                  {programs.category}
                </span>
                <h2 class="sm:text-3xl text-2xl title-font font-medium  mt-4 mb-4">
                  {programs.heading}
                </h2>
                <p class="leading-relaxed mb-8">{programs.description} </p>
                <p>
                  The minimum requirements for admission are:
                  <ul className="px-6 list-disc ">
                    <li>{programs.requirements.a}</li>
                    <li>{programs.requirements.b}</li>
                    <li>{programs.requirements.c}</li>
                  </ul>
                </p>
                <div class=" py-4  border-b-2 border-gray-100 mt-auto w-full">
                  <strong>
                    <a href="Phd.php" className="text-indigo-500">
                      Click here to see more details about this programme
                    </a>
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
