/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import "./Profilecard.css";
import { useState } from "react";
const callouts = [
  {
    name: "Buddhadeb Chhetri",
    description:
      "Front-end Developer 💻 | |📱Android Developer|🎮 Game Developer |Blogger ✍️| Poster Designer📜| Coder👨‍💻",
    imageSrc: "https://avatars.githubusercontent.com/u/71445997?v=4",
    imageAlt: "Buddhadeb Chhetri",
    href: "https://github.com/Buddhad",
  },
  {
    name: "Viren Shewaramani",
    description:
      "Frontend Developer || Competitive Programmer || DSA Enthusiast || Java Fullstack",
    imageSrc:
      "https://avatars.githubusercontent.com/u/84906860?s=400&u=21561b09e00ae5dc55e86129c9f72adbae2df3bd&v=4",
    imageAlt: "Viren",
    href: "https://github.com/viren76",
  },
  {
    name: "Stillwater",
    description: "Noob Coder",
    imageSrc:
      "https://cdn.discordapp.com/attachments/887721411781754930/893875151299559494/IMG_20210914_141959.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://github.com/ST1LLWATER",
  },
  {
    name: "Divash",
    description: "Full Stack Developer ",
    imageSrc:
      "https://cdn.discordapp.com/attachments/848235529312796713/894205089420566538/Screenshot_2021-10-02-20-55-31-92.jpg",
    imageAlt: "Divash",
    href: "https://github.com/Divxsh",
  },
  {
    name: "Sugam Agrawal",
    description:
      "Frontend Developer || Competitive Programmer || DSA Enthusiast || Hacker",
    imageSrc: "https://avatars.githubusercontent.com/u/71265266?v=4",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://github.com/Sugam50",
  },
  {
    name: "Ridhima Aggrawal",
    description: "Full Stack Developer",
    imageSrc:
      "https://cdn.discordapp.com/attachments/888474298895958026/893895127951626250/Picture.jpg",
    imageAlt: "Ridz",
    href: "https://github.com/ridz0326",
  },
  {
    name: "Dhruv",
    description: "Sharing tools, Tips and Self taught Knowledge",
    imageSrc: "https://avatars.githubusercontent.com/u/49398471?v=4",
    imageAlt: "acedesyne",
    href: "https://github.com/acedesyne",
  },
  {
    name: "Piyush",
    description: "Passionate about web development.",
    imageSrc: "https://avatars.githubusercontent.com/u/69067256?v=4",
    imageAlt: "Piyush",
    href: "https://github.com/PiyushNadoda",
  },
  {
    name: "Deepak_070",
    description: "contributing from github no need of git",
    imageSrc: "https://avatars.githubusercontent.com/u/56753916?v=4",
    imageAlt: "Deepak",
    href: "https://github.com/deepsingh9868",
  },
  {
    name: "Priyanka Prasad",
    description:
      "Tech Enthusiast | BCA 2019-22 | GPCSSI 2020 | Postman Student Leader",
    imageSrc: "https://avatars.githubusercontent.com/u/59612128?v=4",
    imageAlt: "Pikachu",
    href: "https://github.com/P-riyanka-prasad",
  },
  {
    name: "Arti",
    description: "Trying to gain knowledge",
    imageSrc: "https://avatars.githubusercontent.com/u/74447472?v=4",
    imageAlt: "Arti",
    href: "https://github.com/artiyadav28",
  },
  {
    name: "José Camacho",
    description: "Junior Frontend Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/57728112?v=4",
    imageAlt: "Jose Camacho",
    href: "https://github.com/JDcamacho13",
  },
  {
    name: "Juan Gonzalez",
    description: "Learning Express and React!",
    imageSrc: "https://avatars.githubusercontent.com/u/75293520?v=4",
    imageAlt: "Juan Gonzalez",
    href: "https://github.com/Juan-Gon03",
  },
  {
    name: "Soundarya",
    description: "Software Developer | Content Creator",
    imageSrc:
      "https://soundaryakhanapur.github.io/Portfolio/static/media/home_anime.b75630b7.jpg",
    imageAlt: "Soundarya",
    href: "https://github.com/SoundaryaKhanapur",
  },
  {
    name: "Mei Xin",
    description: "Beginner in Open Source",
    imageSrc:
      "https://avatars.githubusercontent.com/u/65379600?s=400&u=b243ed86e37a881a34acee4b9ebf5111a82ca5d8&v=4",
    imageAlt: "Mei Xin",
    href: "https://github.com/meixinchoy",
  },
  {
    name: "Chetan",
    description: "Front-end dev",
    imageSrc: "https://avatars.githubusercontent.com/u/70325561?v=4",
    imageAlt: "Chetan Chandel",
    href: "https://github.com/chetanchandel31",
  },
  {
    name: "Samyak Jain",
    description: "Full Stack Web dev | Beginner in Open Source",
    imageSrc:
      "https://cdn.discordapp.com/attachments/874009467669315655/894640476135755786/1633270287380.png",
    imageAlt: "Samyak Jain",
    href: "https://github.com/SamyakJain2020",
  },
  {
    name: "Rohit",
    description: "Front-End Develpoer",
    imageSrc: "https://avatars.githubusercontent.com/u/71249284?s=400&v=4",
    imageAlt: "Rohit",
    href: "https://github.com/Rohit5152",
  },
  {
    name: "Pritam",
    description: "Wannabe a Linux Sysadmin/Pentester",
    imageSrc: "https://avatars.githubusercontent.com/u/77138355?v=4",
    imageAlt: "Pritam",
    href: "https://github.com/pritambera2000",
  },

  {
    name: "Kushagra Arora",
    description: "Android developer | Machine learning enthusiast | DevOps",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C5103AQF9MHNxASoCZA/profile-displayphoto-shrink_400_400/0/1580136101825?e=1639008000&v=beta&t=RH7L2iIZatkPxjVY52hktcTQmvrm1rv9ndXOjSkhz7M",
    imageAlt: "Kushagra Arora",
    href: "https://github.com/kastrahl",
  },
  {
    name: "N Deepika",
    description: "Front-End Develpoer",
    imageSrc:
      "https://media.discordapp.net/attachments/894227501897875528/894227994430824508/1633270955791.jpg?width=493&height=571",
    imageAlt: "N Deepika",
    href: "https://github.com/N-Deepika",
  },
  {
    name: "Aditya Verma",
    description: "A Full Stack Web Developer!",
    imageSrc: "https://avatars.githubusercontent.com/u/73935799?v=4",
    imageAlt: "Aditya Verma",
    href: "https://github.com/homewardgamer",
  },
  {
    name: "Muhlis Iqbal Utomo",
    description: "Learn to Keep Learning!",
    imageSrc: "https://avatars.githubusercontent.com/u/73095492?v=4",
    imageAlt: "IqbaL Utomo",
    href: "https://github.com/iqbalutomo",
  },
  {
    name: "Anjali",
    description: "Full Stack Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/52563861?v=4",
    imageAlt: "Anjali",
    href: "https://github.com/anjali-yadav",
  },
  {
    name: "Vikramaditya",
    description: "Web/IoT Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/66563078?v=4",
    imageAlt: "Vikramaditya",
    href: "https://github.com/vikramadityasinghs",
  },
  {
    name: "Vasav Prashar",
    description: "GITHUB BEGINEER",
    imageSrc: "https://avatars.githubusercontent.com/u/74191996?v=4",
    imageAlt: "VASAV",
    href: "https://github.com/vasav-prashar",
  },
  {
    name: "Piyush Bhangale",
    description: "Backend Guy ✨",
    imageSrc: "https://avatars.githubusercontent.com/u/18086566?v=4",
    imageAlt: "Piyush",
    href: "https://github.com/officialpiyush",
  },

  {
    name: "Vishal Kumar",
    description:
      "Software Developer 💻 || Front End enthusiast 🔥 || Photographer 📸 ",
    imageSrc: "https://avatars.githubusercontent.com/u/22008102?v=4",
    imageAlt: "Vishal",
    href: "https://github.com/vishalkr058",
  },
  {
    name: "Mudit Wadhwa",
    description:
      "Data Structures And Algorithms(Problem Solver) 🖥️||Web Development enthusiast 🔥",
    imageSrc: "https://avatars.githubusercontent.com/MuditWadhwa",
    imageAlt: "Mudit",
    href: "https://github.com/MuditWadhwa",
  },
  {
    name: "Shubham Mehra",
    description: "Full Stack Developer | Tech Enthusiast",
    imageSrc: "https://avatars.githubusercontent.com/u/54092258?v=4",
    imageAlt: "Shubham",
    href: "https://github.com/shubhammehra4",
  },
  {
    name: "Patricio Díaz",
    description: "I'm a Freelance Front-End Developer & Content creator.",
    imageSrc: "https://avatars.githubusercontent.com/u/30910253?v=4",
    imageAlt: "Patricio Díaz github avatar",
    href: "https://github.com/patodm",
  },
  {
    name: "Sadathulla Shariff",
    description: "Front-End Developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/51914072?s=400&u=18f96b6cf1d4b35f938c0409325bdcc4f7d2d677&v=4",
    imageAlt: "Sadathulla Shariff",
    href: "https://github.com/sadathshariff",
  },
  {
    name: "Faris Daffa",
    description: "20% Learn, 80% Practice 🕵️",
    imageSrc: "https://avatars.githubusercontent.com/u/65797160?v=4",
    imageAlt: "Faris0520",
    href: "https://github.com/Faris0520",
  },
  {
    name: "Nidble",
    description: "Curiosity's Tamer",
    imageSrc: "https://avatars.githubusercontent.com/u/1447119?s=96&v=4",
    imageAlt: "nidble",
    href: "https://github.com/nidble",
  },
  {
    name: "Somesh Mishra",
    description: "Front-End Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/41496294?v=4",
    imageAlt: "someshium",
    href: "https://github.com/someshium",
  },
  {
    name: "Samyak Gajbhiye",
    description: "Ethical Hacker || CTF Player || UI/UX Designer || Programmer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/54959744?s=400&u=3b836f23ef557da3588cae03a748a414f50ef9ea&v=4",
    imageAlt: "specxybeardo avatar",
    href: "https://github.com/specxybeardo",
  },
  {
    name: "Mital Sapkale",
    description: "Frontend Developer  || Programmer",
    imageSrc:
      "https://cdn.discordapp.com/attachments/875062360623185990/900761408818524191/IMG_20210709_184725.jpg",
    imageAlt: "Mital avatar ",
    href: "https://github.com/mitalsapkale01",
  },
  {
    name: "Abhishek Bhagate",
    description: "Full-Stack Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/40712852?v=4",
    imageAlt: "Abhishek avatar",
    href: "https://github.com/archit11111",
  },
  {
    name: "Kushal Gandhi",
    description: "Passionate about Web Developement",
    imageSrc:
      "https://avatars.githubusercontent.com/u/63503991?s=400&u=c6b106ec0e3e2d5d4bc968d8f8a024fbe8314f5e&v=4",
    imageAlt: "Kushal Gandhi",
    href: "https://github.com/kushalgandhi26",
  },
  {
    name: "Apurvan Morey",
    description: "Learning Everything",
    imageSrc: "https://avatars.githubusercontent.com/u/24579027?v=4",
    imageAlt: "Apurvan Morey",
    href: "https://github.com/apurvanmorey",
  },
  {
    name: "Shaurya Srivastava",
    description: "Software Engineer",
    imageSrc:
      "https://media.discordapp.net/attachments/896871082546573362/896871601650401280/shauryapic.jpg?width=631&height=669",
    imageAlt: "Shaurya Srivastava",
    href: "https://github.com/shauryasrivatava",
  },
  {
    name: "Joe D'Agostino",
    description: "Web Developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/393691?s=400&u=bbd3e9078badbd855df4a8b8e165156c51583dd9&v=4",
    imageAlt: "Joe D'Agostino",
    href: "https://github.com/joedag32",
  },
  {
    name: "Vilgax",
    description: "CS Engineer",
    imageSrc: "https://avatars.githubusercontent.com/u/59883021?v=4",
    imageAlt: "Vilgax",
    href: "https://github.com/siddharthsg2",
  },
  {
    name: "Krittin Jaruvisut",
    description: "Front End Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/23163165?v=4",
    imageAlt: "Krittin-58",
    href: "https://github.com/krittin-58",
  },
  {
    name: "Wali ullah",
    description: "Front-End Developer",
    imageSrc:
      "https://avatars.githubusercontent.com/u/57776479?s=400&u=fc93395cc6f39cf66d9da90ea56db0443d3efa52&v=4",
    imageAlt: "wali",
    href: "https://github.com/wali39",
  },
  {
    name: "Subhash Karthik",
    description: "Web Developer 💻 | Software engineer| Coder👨‍💻",
    imageSrc:
      "https://avatars.githubusercontent.com/u/77478622?s=400&u=21b68918bfc57bc122b7c3ffeee2e4c2b87595e3&v=4",
    imageAlt: "Subhash Karthik",
    href: "https://github.com/Karthik-59",
  },
  {
    name: "Sobhan Dash",
    description: "FullStack Developer || Beginner in Open Source",
    imageSrc: "https://avatars.githubusercontent.com/u/52308005?v=4",
    imageAlt: "Sobhan Dash",
    href: "https://github.com/SobhanDash",
  },
  {
    name: "Jatin Kumar",
    description: "Front-end Developer || Beginner in Open Source",
    imageSrc: "https://avatars.githubusercontent.com/jatinkumar30",
    imageAlt: "Jatin Kumar",
    href: "https://github.com/jatinkumar30",
  },
  {
    name: "Dipesh Jaswani",
    description: "ReactJs developer || C++",
    imageSrc: "https://avatars.githubusercontent.com/Dipesh123-ux",
    imageAlt: "Dip123",
    href: "https://github.com/Dipesh123-ux",
  },
  {
    name: "IndominouS",
    description: "ReactJs developer || Python",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C5603AQFNT1J2uuzMYw/profile-displayphoto-shrink_100_100/0/1614143391669?e=1640217600&v=beta&t=EpIK55H8Qnf9gZth6aOU5jTex9nkopJvL0rhT-HhjFs",
    imageAlt: "Uv123",
    href: "https://github.com/NOOBUV",
  },
  {
    name: "Athul Tulasidasan",
    description: "Fullstack Developer 💻 | | Open Source |",
    imageSrc: "https://avatars.githubusercontent.com/Athul0491",
    imageAlt: "Athul Tulasidasan",
    href: "https://github.com/Athul0491",
  },
  {
    name: "Pratyush Kumar",
    description: "Web Developer || Data Structures",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C5603AQGWaweHoXwsJQ/profile-displayphoto-shrink_800_800/0/1610298299507?e=1640217600&v=beta&t=rB2HtWFKzOXw4qkNRdyw4ksypYGSSFfWo-T6vp8spmk",
    imageAlt: "PratyushKumar",
    href: "https://github.com/kpratyush12345",
  },
  {
    name: "Aritro Sinha",
    description: "Front-end Developer ",
    imageSrc: "https://avatars.githubusercontent.com/sinhaaritro",
    imageAlt: "Aritro Sinha",
    href: "https://github.com/sinhaaritro",
  },
  {
    name: "Ayushi Kosta",
    description: "ReactJs developer || C++",
    imageSrc: "https://avatars.githubusercontent.com/Ayushi-Kosta",
    imageAlt: "Ayushi",
    href: "https://github.com/Ayushi-Kosta",
  }
];

export default function Example() {
  const [val, setval] = useState("");
  return (
    <div className="bg-gray-100 dark:bg-black">
      {/* <SearchBar contributors={callouts}/> */}
      <div
        style={{ background: "#DEB887" }}
        className="mt-6 mx-auto rounded-full  shadow w-1/2 md:w-1/3 lg:w-1/4"
      >
        <input
          type="search"
          placeholder=" Search contributors name..."
          className="p-3 opacity-40 h-22 shadow  text-black  placeholder-black rounded-full w-full md:focus:text-black-600"
          onChange={(e) => {
            setval(e.target.value);
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Contributors
          </h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 ">
            {callouts.map((callout) =>
              callout.name.toLowerCase().includes(val.toLowerCase()) ? (
                <div
                  key={callout.name}
                  className="group relative py-6 profile-card text-center"
                >
                  <div className="relative w-48 h-48 overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 ">
                    <img
                      style={{ objectFit: "contain" }}
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="contributor-name mt-6 text-sm text-gray-500 dark:text-gray-100">
                    <div className="contributor">{callout.name}</div>
                  </h3>
                  <a href={callout.href} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0" />
                  </a>
                  <p className="text-base font-semibold text-gray-900 dark:text-gray-500">
                    {callout.description}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
