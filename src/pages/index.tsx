import type { NextPage } from "next";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProsSection } from "../components/Pros";
import { styles } from "../styles";

const footerLinks = [
  {
    title: "Sobre",
    links: [
      {
        label: "Blog",
        link: "/blog",
      },
    ],
  },
];

const Home: NextPage = () => {
  const { classes } = styles();

  return (
    <div className={classes.wrapper}>
      <Header
        links={[
          { link: "/", label: "Home" },
          { link: "/services", label: "Serviços" },
          { link: "/contacts", label: "Contato" },
        ]}
      />
      <HeroSection />
      <FeaturesSection />
      <ProsSection />
      <Footer data={footerLinks} />
    </div>
  );
};

export default Home;
