export const siteConfig = {
  name: "Chris Pickett",
  title: "Software Engineer",
  description: "Portfolio website of Chris Pickett (\"Parnic\")",
  accentColor: "#db3434",
  social: {
    email: "parnic@parnic.com",
    linkedin: "https://linkedin.com/in/Parnic",
    github: "https://github.com/parnic",
    mobygames:
      "http://www.mobygames.com/developer/sheet/view/developerId,226687/",
  },
  resume: "https://drive.google.com/file/d/1UeeItcOpd3r4sInz0D7bnllxHd_BYE-1/view",
  aboutMe:
    "I'm a problem solver. I have taken a winding career path through several different specialties, ultimately realizing that I'm primarily a generalist: someone who gets things done and goes where they are needed. I am passionate about improving developer experience and tooling, automating as many tedious or boring tasks as possible to ensure the team's output is high quality. " +
    "I have a love of learning, engrossing myself in new technologies and creating side projects to explore how new programming languages, technologies, and services can be used to build robust, interesting applications. ",// +
    // "I've enjoyed each role I've had and have found fulfillment in helping others on the team accomplish their goals as well as improving the quality of the company's products and its productivity. " +
    // "My primary interest is self-improvement through staying abreast of the latest technologies and updates to languages and software development practices. I find great satisfaction in implementing code quality analysis and metric tools as well as automating and simplifying as many processes as possible.",
  skills: [
    "C++",
    "C#",
    "Go",
    "TypeScript",
    "Dart/Flutter",
    "Python",
    "Lua",
    "Unreal Engine 3/4/5",
    "Unity",
    "Git",
    "Perforce",
    "Linux",
    "iOS/Android",
  ],
  projects: [
    {
      name: "Borderlands 3",
      description:
        "At the hard edge of the galaxy lies a group of planets ruthlessly exploited by militarized corporations. Brimming with loot and violence, this is your home—the Borderlands. Now, a crazed cult known as The Children of the Vault has emerged and is spreading like an interstellar plague. Play solo or co-op as one of four unique Vault Hunters, score loads of loot, and save the galaxy from this fanatical threat.",
      link: "https://borderlands.com/en-US/",
      image: "/images/logo_bl3.png",
    },
    {
      name: "Borderlands 2",
      description:
        "Borderlands 2 features all-new characters; skills; imaginative, diverse new environments with unique missions and enemies; and more exciting and fun weapons, equipment and loot than ever before.",
      link: "https://en.wikipedia.org/wiki/Borderlands_2",
      image: "/images/logo_bl2.png",
    },
    {
      name: "Borderlands",
      description:
        "Borderlands sends up to four co-op players to the harsh frontier planet Pandora in search of a mysterious Alien Vault legend. Featuring a unique First Person Roleplaying Shooter gameplay, you'll customize your character as you explore and battle enemies in frantic FPS combat.",
      link: "https://en.wikipedia.org/wiki/Borderlands_(video_game)",
      image: "/images/logo_bl1.png",
    },
    {
      name: "Brothers in Arms: Hell's Highway",
      description:
        "Brothers in Arms: Hell's Highway is the third entry in the Brothers in Arms series of video games which follows the men of the 101st Airborne Division (502nd Parachute Infantry Regiment). This game once again puts players in the role of Staff Sergeant Matt Baker during Operation Market Garden in the later stages of World War II.",
      link: "http://en.wikipedia.org/wiki/Brothers_in_Arms:_Hell%27s_Highway",
      image: "/images/logo_bia.jpg",
    },
  ],
  experience: [
    {
      company: "Tanium",
      title: "Staff Software Engineer",
      dateRange: "Aug 2024 - Present",
      bullets: [
        "Backend development for Go web services supporting IT endpoint management software",
        "Native platform client/server development for endpoint management software",
      ],
    },
    {
      company: "Pernicious Games, LLC",
      title: "Founder",
      dateRange: "2014 - Present",
      bullets: [
        "Created Windows Phone/Surface tablet, Android, and iOS apps",
        "Built websites for myself, hobbies, and a few small businesses",
        "Contract programming for Gearbox Software on Borderlands 3 and Gearbox Publishing on Penn & Teller VR: F U, U, U, & U (Oculus Quest)",
        "Contract work on Gearbox SHiFT web/backend services and SDK for titles including Borderlands 3 and Godfall",
      ],
    },
    {
      company: "Stray Kite Studios",
      title: "Principal Engineer",
      dateRange: "May 2019 - Aug 2024",
      bullets: [
        "Anything and everything to help a startup get off the ground",
        "C++ development in Unreal Engine 4 and 5, including contracting on Fortnite",
        "Office network management, build scripts, and supporting tools",
      ],
    },
    {
      company: "Magic Leap",
      title: "Senior Programmer",
      dateRange: "Oct 2017 - May 2019",
      bullets: [
        "External developer support specialist for companies building apps on Magic Leap hardware in Unreal Engine 4",
        "Built SDK examples and demo apps in Unity and Unreal Engine 4 showcasing the Magic Leap AR headset",
        "Administered the Dallas office's Perforce server for content developers",
        "Wrote Go-based, containerized, AWS-hosted web apps for web-based application services",
      ],
    },
    {
      company: "Gearbox Software",
      title: "Programmer -> Technical Director",
      dateRange: "Jun 2006 - Oct 2017",
      bullets: [
        "Started as a gameplay programmer on Brothers in Arms: Hell's Highway",
        "Became Xbox 360 platform specialist, then Lead Programmer, then Technical Director",
        "Tools programming, release engineering, and backend web API development across several roles",
      ],
    },
    {
      company: "Ritual Entertainment",
      title: "Quality Assurance",
      dateRange: "Dec 2005 - Jun 2006",
      bullets: [
        "Tested the SiN series of games while finishing a Bachelor's degree at UT Dallas",
        "Represented Ritual at E3, showing SiN Episodes: Emergence to press and gamers",
      ],
    },
    {
      company: "Data Doctors",
      title: "Front Counter/Technician Assistant",
      dateRange: "Dec 2004 - Apr 2005",
      bullets: [
        "Maintained computer systems and handled front counter customer service",
        "Built internal web applications, including an employee time clock",
      ],
    },
    {
      company: "Electronic Outpost",
      title: "Computer Technician",
      dateRange: "1999 - 2002",
      bullets: [
        "Handled computer maintenance and repairs for the store",
        "Created and maintained the store's website",
      ],
    },
  ],
  education: [
    {
      school: "University of Texas at Dallas",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Aug 2002 - May 2006",
      achievements: [
        "Elective coursework in computer and network security, databases, and technical writing",
      ],
    },
  ],
};
