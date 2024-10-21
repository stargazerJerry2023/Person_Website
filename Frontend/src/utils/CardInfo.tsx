import Discover_RGV from "../assets/ProjectIMG/Discover_RGV.png"
import News_Directory from "../assets/ProjectIMG/News_Directory.png"
import Game_of_Life from "../assets/ProjectIMG/Game_of_Life.png"
import Weather from "../assets/ProjectIMG/Weather.png"
import WasteWizzards from "../assets/ProjectIMG/WasteWizzard.png"
const ProjectInfo = [
  {
    id: "0",
    projectImg: Discover_RGV,
    title: "Discover RGV",
    about: "The valley is a place filled with Local vendors. It's what makes up the valley.  The food is always good and i spent my entire life in the valley and didn't even realized these vendors existed. They have no online reputation besides facebook and they don't appear in google maps so people pass by these gemstones. Discover RGV is a local discovery platform where users can view local Vendors from the RGV and local  food Vendors can promote their businesses here which has attracted 40+ local food Vendors so far. ",
    technologies: ["React", "Express", "Node", "MongoDB", "Google Cloud", "Firebase"],
    github: "",
    website: "https://discover-rgv.vercel.app/",
  },
  {
    id: "1",
    projectImg: News_Directory,
    title: "News Directory",
    about: "News Directory is a Webpage where you can look up information on the Chronicling America database provided by the Library of Congress. You can filter results by state and LCCN. There is another table displaying members who signed up for the community and storing them in the database. This was my very first React Project and i'm very new to all these concepts. I spent alot of time researching and teaching myself how React works and what i can use it for. ",
    technologies: ["React", "Express", "Node", "MongoDB", "Heroku"],
    github: "https://github.com/stargazerJerry2023/technical-assessment",
    website: "https://technical-assessment-xwma.vercel.app/",
  },
  {
    id: "2",
    projectImg: Game_of_Life,
    title: "Game of Life",
    about: "The Game of Life is an engaging educational project designed to enhance financial literacy among users. Through a series of interactive questions and quizzes, users can test their knowledge of personal finance, budgeting, saving, investing, and debt management. By answering questions correctly, users can earn points per every correct answer, encouraging them to learn while having fun! I worked with a team of 4 to create this project for Welcome Back Hackathon 2024 at Boston University.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/stargazerJerry2023/GameofLife",
    website: "https://gameof-life-brown.vercel.app/",
  },

  {
    id: "3",
    projectImg: Weather,
    title: "Weather App",
    about: "Built a Generic Weather App that displays the current weather of a city. The app uses OpenWeather API to fetch the weather data and displays it on the screen. The app is built using Python and Streamlit. The app is deployed on Streamlit sharing. This was a fun project and one of the first projects in my coding journey. ",
    technologies: ["OpenWeather", "python", "Streamlit"],
    github: "https://github.com/JorYin/Personal-Website/tree/main/src",
    website: "https://weather-psw3xx8ps2yagytanjtwkd.streamlit.app/"
  },

  {
    id: "4",
    projectImg: WasteWizzards,
    title: "Waste Wizzards",
    about: "We face significant challenges in identifying recyclable items due lack of knowledge about recycling  information. Where I come from and the rest of my team, our schools didn't teach us much about recycling making identification challenging even with trash cans and logos. Our innovative web application simplifies the process. Users can snap a picture of an object and the machine learning algorithm will analyze it. The program identifies the object's material, type, and provides recycling information. Created during the Welcome back Hackathon 2023",
    technologies: ["Hugging-Face", "python", "Streamlit", "FastAI"],
    github: "https://github.com/stargazerJerry2023/WasteWizzard/tree/main",
    website: "https://wastewizard-5vsq9e6trx6pju8eexjkkz.streamlit.app/"
  }
];

export default ProjectInfo;