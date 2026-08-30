import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Keymaking Near Me Dubai",
  description:
    "Keymaking Near Me is a trusted mobile locksmith and key making service in Dubai, offering car, home, and office key solutions 24/7.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Dubai's trusted mobile locksmith team, cutting and programming keys, replacing locks, and unlocking doors 24/7 across the city."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
