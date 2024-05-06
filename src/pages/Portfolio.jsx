import Project from '../components/Project';

export default function Portfolio() {
    const projectList = [
        {
            id: 1,
            name: "Social Network Api",
            githubLink: "https://github.com/Tcampbell-93/social-network-api",
            deployedLink: "https://drive.google.com/file/d/1rb6TBD0VazV_cldpkfkJZ8uxLEC7vFq3/view",
            image: "../images/social-network-api.png"
        },
        {
            id: 2,
            name: "Regex Tutorial",
            githubLink: "https://gist.github.com/Tcampbell-93/a156fb8aa3e2dc3d06f9d5bedc5ca028",
            deployedLink: "https://gist.github.com/Tcampbell-93/a156fb8aa3e2dc3d06f9d5bedc5ca028",
            image: "../images/regex-tutorial.png"
        },
        {
            id: 3,
            name: "J.A.T.E.",
            githubLink: "https://github.com/Tcampbell-93/jate",
            deployedLink: "https://jate-838o.onrender.com/",
            image: "../images/jate.png"
        },
        {
            id: 4,
            name: "Sunnyside Pools",
            githubLink: "https://github.com/elindstr/sunnyside",
            deployedLink: "https://sunnyside-699326087e54.herokuapp.com/",
            image: "../images/sunnyside-pool.png"
        },
        {
            id: 5,
            name: "Ecommerce Backend",
            githubLink: "https://github.com/Tcampbell-93/ecommerce-backend",
            deployedLink: "https://drive.google.com/file/d/1ojySTFVK1umSGcNee8GG-gUTs_JpdKmV/view",
            image: "../images/ecommerce-backend.png"
        },
        {
            id: 6,
            name: "README Generator",
            githubLink: "https://github.com/Tcampbell-93/readme-generator",
            deployedLink: "https://drive.google.com/file/d/1E9gciRVVZglKPfdf48P8LA1wrWcMysNe/view",
            image: "../images/readme-generator.png"
        },
    ];
    return (
        <Project projectList={projectList} />
    )
}