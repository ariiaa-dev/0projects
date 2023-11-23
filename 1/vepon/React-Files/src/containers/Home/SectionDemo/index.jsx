import Demo from "./Demo";

import SectionHeading from '../../../components/SectionHeading'

const SectionDemo = ({dataDemo}) => {

  return (
    <>
      <section className="demo section-padding-100-70" id="demo">
        <div className="container">
          <SectionHeading
            addHome={true}
            text="Choose a demo"
          />
          <div className="row">
            {dataDemo && dataDemo.map((item , key) => (
                <Demo
                  key={key}
                  img={item.img}
                  path={item.path}
                  text={item.text}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );

}

export default SectionDemo;
