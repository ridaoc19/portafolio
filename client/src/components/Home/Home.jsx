import About from './About';
import Jobs from './Jobs';
import Projects from './Projects';
import Studies from './Studies';
import style from './home.module.scss';
import Footer from '../Layout/Footer';
import Experience from './Experience';

export default function Home(props) {
  return (
    <div>
      <div className={style.home_container}>
        <div className={style.home_about}>
          <About />
        </div>
        <div className={style.home_studies}>
          <Studies />
        </div>
        <div className={style.home_jobs}>
          <Jobs />
        </div>
        <div className={style.home_experience}>
          <Experience />
        </div>
        <div className={style.home_projects}>
          <Projects />
        </div>
        <div className={style.home_footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

