import project1 from "../assets/project1.png";
import textcraft from "../assets/textcraft.png";
import portfolio from "../assets/Portfolio.png";
import Quicktask_img from  "../assets/QuickTask_img.png"
import codingyodhha from  "../assets/coding_yoddha_img.png"
import Inotebook_img from  "../assets/Inotebook_img.png"
import Expert from  "../assets/Expert_img.png"
 
export default function Projects() {
  return (
    <section className="featured-projects" id="projects">
      <h2 className="featured-title">Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-box">
          <img src={textcraft} alt="TextCraft Project" />

          <div className="project-info">
            <h3>TextCraft – Text Utility Web Application</h3>
            <a 
              href="https://textcraft-ruby.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box">
          <img src={portfolio} alt="Portfolio Project" />

          <div className="project-info">
            <h3>Personal Developer Portfolio Website</h3>
            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box">
          <img 
            src={project1} 
            alt="NewsFlash – Real-Time News Web Application" 
          />

          <div className="project-info">
            <h3>NewsFlash – Real-Time News Web Application</h3>
            <a 
              href="https://news-flash-know-more-scroll-less.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

      {/* </div>
      <div className="projects-grid"> */}
      <div className="project-box">
          <img src={Expert} alt="Expert Mnagement System...." />

          <div className="project-info">
            <h3>Expert Management System</h3>
            <a 
              href="https://expert-managemet-frontend.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box">
          <img src={Quicktask_img} alt="QuickTask...." />

          <div className="project-info">
            <h3>QuickTask-Home Servive Application</h3>
            <a 
              href="https://quick-task-frontend-25-2-26.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box">
          <img src={codingyodhha} alt="Coding_Yoddha....." />

          <div className="project-info">
            <h3>Coding_Yoddha</h3>
            <a 
              href="https://code-yoddha.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box">
          <img 
            src={Inotebook_img } 
            alt="Coming Soon iNoteBook...." 
          />

          <div className="project-info">
            <h3>iNoteBook</h3>
            <a 
              href="inotebook" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
