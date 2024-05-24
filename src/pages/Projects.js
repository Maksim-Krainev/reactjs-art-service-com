import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
	useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
	return (
		<main className="section">
				<ul className="projects" data-aos="fade-up" data-aos-delay="500">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
		</main>
	);
};

export default Projects;
