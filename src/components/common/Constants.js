import clockImage from "../../assets/fcc-clock.png";
import drumMachineImage from "../../assets/fcc-dm.png";
import markdownImage from "../../assets/fcc-md.png";
import quoteMachineImage from "../../assets/fcc-qm.png";
import amznClone from "../../assets/niplan.png";
import ethScan from "../../assets/eth-scan.png";

export const myProjects = [
  {
    key: "1",
    title: "Ethereum scan project",
    content: "Ethereum scan project using React and alchemy API.",
    image: ethScan,
    link: "https://blockexplorer-clone.vercel.app/",
  },
  {
    key: "2",
    title: "A drum machine project",
    content: "A dummy project of a drum machine with freeCodeCamp.",
    image: drumMachineImage,
    link: "https://fcc-drum-machine-nu.vercel.app/",
  },
  {
    key: "3",
    title: "A markdown previewer project",
    content:
      "A dummy project of mark down previewer that transform some text in html page with freeCodeCamp.",
    image: markdownImage,
    link: "https://fcc-markdown-b7mj.vercel.app/",
  },
  {
    key: "4",
    title: "Amazon Inventory project",
    content:
      "Amazon inventory clone project using React, Redux, Django, SQL, and AWS S3.",
    image: amznClone,
    link: "https://niplan-market.onrender.com/",
  },

  {
    key: "5",
    title: "A random quote machine project",
    content: "A dummy project that generate random quotes with freeCodeCamp.",
    image: quoteMachineImage,
    link: "https://quote-machine-dun.vercel.app/",
  },
  {
    key: "6",
    title: "25 + 5 Clock project",
    content: "It is a timer that counts down from 25 minutes and 5 minutes.",
    image: clockImage,
    link: "https://fcc-clock-byme.vercel.app/",
  },
];
