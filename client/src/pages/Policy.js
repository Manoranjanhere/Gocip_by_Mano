import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Policy</h1>
          <p className="text-justify mt-2">
          For any customization requests, feel free to reach out to us through any of the contact methods listed on our website. Simply share your requirements with us, and we'll ensure to fulfill them to the best of our abilities, all at a reasonable price. Your satisfaction is our responsibility, and we're committed to delivering the highest quality service tailored to your needs.
          </p>

      </div>
      </div>
    </Layout>
  );
};

export default Policy;