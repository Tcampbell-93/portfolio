import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => {
    return (
        <div className='container'>
            {props.projectList.map(item => (
                <div className="project-card" key={item.id}>
                    <h2>{item.name}</h2>
                    <div>
                        <img src={item.image} alt={item.name} className="img-background" />
                        <a href={item.deployedLink} target="_blank" rel="noopener noreferrer" role="button" className="project-link">
                            <FontAwesomeIcon icon={faLink} /> Deployed Link
                        </a>
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" role="button" className="project-link">
                            <FontAwesomeIcon icon={faGithub} /> GitHub Link
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;