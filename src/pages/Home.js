import React from "react";
//import { Helmet } from "react-helmet";
//import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";
import Banner from "../components/Web/Banner/Banner";
import howDoes from "../components/Web/howDoes";
// import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
// import ReviewsCourses from "../components/Web/ReviewsCourses";

export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title>Agustín Navarro Galdon</title>
        <meta
          name="description"
          content="Home | Web sobre programación"
          data-react-helmet="true"
        />
      </Helmet> */}
      {/* <MainBanner /> */}
      <Banner/>
      <howDoes/>
      <HomeCourses />
      
      {/* <HowMyCoursesWork />
      <ReviewsCourses /> */}
    </>
  );
}