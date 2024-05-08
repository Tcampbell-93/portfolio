import Project from '../components/Project';

import social from '../images/social-network-api.png';
import regex from "../images/regex-tutorial.png";
import jate from "../images/jate.png";
import sunnyside from "../images/sunnyside-pool.png";
import ecommerce from "../images/ecommerce-backend.png";
import readme from "../images/readme-generator.png"


export default function Portfolio() {
    //create an array of the projects to be passed down later to the project component as props
    const projectList = [
        {
            id: 1,
            name: "Social Network Api",
            githubLink: "https://github.com/Tcampbell-93/social-network-api",
            deployedLink: "https://drive.google.com/file/d/1rb6TBD0VazV_cldpkfkJZ8uxLEC7vFq3/view",
            image: social
        },
        {
            id: 2,
            name: "Regex Tutorial",
            githubLink: "https://gist.github.com/Tcampbell-93/a156fb8aa3e2dc3d06f9d5bedc5ca028",
            deployedLink: "https://gist.github.com/Tcampbell-93/a156fb8aa3e2dc3d06f9d5bedc5ca028",
            image: regex
        },
        {
            id: 3,
            name: "J.A.T.E.",
            githubLink: "https://github.com/Tcampbell-93/jate",
            deployedLink: "https://jate-838o.onrender.com/",
            image: jate
        },
        {
            id: 4,
            name: "Sunnyside Pools",
            githubLink: "https://github.com/elindstr/sunnyside",
            deployedLink: "https://sunnyside-699326087e54.herokuapp.com/",
            image: sunnyside
        },
        {
            id: 5,
            name: "Ecommerce Backend",
            githubLink: "https://github.com/Tcampbell-93/ecommerce-backend",
            deployedLink: "https://drive.google.com/file/d/1ojySTFVK1umSGcNee8GG-gUTs_JpdKmV/view",
            image: ecommerce
        },
        {
            id: 6,
            name: "README Generator",
            githubLink: "https://github.com/Tcampbell-93/readme-generator",
            deployedLink: "https://drive.google.com/file/d/1E9gciRVVZglKPfdf48P8LA1wrWcMysNe/view",
            image: readme
        },
    ];

    return (
        <Project projectList={projectList} />
    )
}