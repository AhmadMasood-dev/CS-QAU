import { deptfac2022 } from "../../assets/images";
const facultyMembers = [
  {
    name: "Dr. Onaiza Maqbool",
    designation: "Professor",
    interests: [
      "Software reengineering",
      "Software architecture recovery",
      "Program understanding",
      "Machine learning",
    ],
    email: "oniaza at qau dot edu dot pk",
    phone: "+92-51-9064 2060",
  },
  {
    name: "Dr. Khalid Saleem",
    designation: "Associate Professor",
    interests: [
      "Database Systems",
      "Information Systems",
      "Distributed Systems",
      "Data Warehousing/Mining",
    ],
    email: "ksaleem at qau dot edu dot pk",
    phone: "+92-51-9064 2061",
  },
  {
    name: "Dr. Shuaib Karim",
    designation: "Assistant Professor",
    interests: [
      "Usability / Accessibility of Interactive Systems",
      "Web Engineering",
      "Applied aspects of ontologies",
    ],
    email: "skarim at qau dot edu dot pk",
    phone: "+92-51-9064 2055",
  },
  {
    name: "Dr. Rabeeh Ayaz Abbasi",
    designation: "Professor",
    interests: ["Social Computing", "Network Science", "Data Science"],
    email: "rabbasi at qau dot edu dot pk",
    phone: "+92-51-9064 2050",
  },
  {
    name: "Dr. Ayyaz Hussain",
    designation: "Chairperson\nProfessor",
    interests: [
      "Pattern Recognition",
      "Image Processing",
      "Computational Intelligence",
    ],
    email: "ayyaz.hussain at qau dot edu dot pk",
    phone: "+92-51-9064 2059",
  },
  {
    name: "Dr. Muazzam A Khan Khattak",
    designation: "Professor",
    interests: [
      "Internet of Things",
      "Next Generation Intelligent Networks",
      "Block Chain Based Information and Network Security",
      "Vehicular Ad-hoc and Sensor Actor Networks",
      "Acoustic and Multimedia Networks",
    ],
    email: "muazzam.khattak at qau dot edu dot pk",
  },
  {
    name: "Dr. Ghazanfar Farooq Siddiqui",
    designation: "Associate Professor",
    interests: ["Agents (Virtual Agents)", "Modeling and Simulation"],
    email: "ghazanfar at qau dot edu dot pk",
    phone: "+92-51-9064 2058",
  },
  {
    name: "Dr. Muddassar Azam Sindhu",
    designation: "Professor",
    interests: ["Software Testing", "Model Mining", "Formal Methods"],
    email: "masindhu at qau dot edu dot pk",
    phone: "+92-51-9064 2066",
  },
  {
    name: "Dr. Akmal Saeed Khattak",
    designation: "Associate Professor",
    interests: [
      "Information Retrieval",
      "Machine Learning",
      "Text Mining",
      "Natural Language Processing",
    ],
    email: "akhattak at qau dot edu dot pk",
    phone: "+92-51-9064 2161",
  },
  {
    name: "Dr. Umer Rasheed",
    designation: "Associate Professor",
    interests: [
      "Multimedia Information Retrieval",
      "Human Aspects of Computing",
    ],
    email: "umerrashid at qau dot edu dot pk",
    phone: "+92-51-9064 2012",
  },
  {
    name: "Dr. S. M. Naqi",
    designation: "Assistant Professor",
    interests: [
      "Medical Imaging",
      "Machine Learning",
      "Image Segmentation and Classification",
    ],
    email: "smnaqi at qau dot edu dot pk",
    phone: "+92-51-9064 2013",
  },
  {
    name: "Memoona Afsheen Malik",
    designation: "Lecturer",
    interests: [
      "Problem Solving and Programming",
      "Data Structures and Algorithms",
    ],
    email: "memoona at qau dot edu dot pk",
    phone: "+92-51-9064 2064",
  },
  {
    name: "Ifrah Farrukh Khan",
    designation: "Lecturer",
    interests: ["Database Systems", "Networking"],
    email: "ifrahkhan at qau dot edu dot pk",
    phone: "+92-51-9064 2005",
  },
];

function Faculties() {
  return (
    <div className="bg-accent-dark ">
      <div className="container px-5 py-24 mx-auto">
        <div>
          <img src={deptfac2022} alt="" />
        </div>
        <div class="flex flex-wrap w-full mb-20 flex-col pt-24 items-center text-center">
          <h1 class="sm:text-3xl text-2xl text-white font-medium title-font mb-2  ">
            Our Faculty
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-300">
            Our faculty members challenge their students,
            <br />
            share insights gained through professional experience and
            communicate
            <br />
            the knowledge they've spent a lifetime acquiring.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="p-5 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="mb-1 text-xl font-bold text-primary">
                {faculty.name}
              </h2>
              <h3 className="mb-2 text-sm text-gray-600">
                {faculty.designation}
              </h3>
              <h4 className="mb-1 font-semibold text-gray-800 text-md">
                Research Interests
              </h4>
              <ul className="mb-3 text-sm text-gray-700 list-disc list-inside">
                {faculty.interests.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mb-1 text-sm text-gray-700">
                <strong>Email:</strong> {faculty.email}
              </p>
              {faculty.phone && (
                <p className="text-sm text-gray-700">
                  <strong>Phone:</strong> {faculty.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculties;
