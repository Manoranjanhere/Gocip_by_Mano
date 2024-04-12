import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome where creativity knows no bounds! Our dedicated artisans are here to turn your imagination into reality with personalized crafts and designs tailored just for you and your loved ones. Whether it's a special gift or a unique addition to your home, our handmade treasures will add charm and personality to any space. With convenient delivery to your doorstep, let us help you create memories that last a lifetime. Welcome to a world of endless possibilities.





          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;