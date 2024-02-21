import React from 'react';
import Data from './data/Projects.json';
import Slk from './javascripts/Slick';
import '../styles/Projects.scss';

const Projects = () => {
    const openLink = (link) => {
        window.open(link, "_blank", "noopener noreferrer");
    };
    React.useEffect(() => {
        Slk();
    }, []);
    return (
        <div className="pro-container">
            <h1>Projects</h1>
            <div id="projects">
                {Data.map(item => {
                    return (
                        <li key={item.id} onClick={() => openLink(item.link)}>
                            <img src={require(`../styles/imgs/${item.img}`)} alt={item.title} />
                            <div className="text">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    );
                })}
            </div>
        </div>
    )
}
export default Projects;