import React from 'react';
import Data from './data/Experiences.json';
import { Zoom } from 'react-reveal';
import '../styles/Experiences.scss'

const Experiences = () => {
    return (
        <div className="exp-container">
            <h1>Experiences</h1>
            <Zoom bottom cascade>
                <div className="experiences">
                    {Data.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="panel">
                                    <div className="heading">
                                        <h2>{item.company}</h2>
                                        <p>{item.date}</p>
                                    </div>
                                    <h4>{item.role}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </li>
                        );
                    })}
                </div>
            </Zoom>
        </div>
    )
}
export default Experiences;