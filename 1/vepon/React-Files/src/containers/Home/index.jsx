import dataDemo from '../../data/data-containers/data-Home.js';

// import "./wellcome.scss"
import Preloader from '../../components/Preloader'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

    return (
      <>
        <Preloader Title=" Multipurpose Template" />
        <SectionDemo
          dataDemo={dataDemo}
        />
        <footer className="copy-rights">
            <div className="text-center">
              <p className="mb-0"> All Rights Reserved &copy;</p>
            </div>
        </footer>
      </>
    );
}

export default HomeContainer;

