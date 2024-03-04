import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Card from "../component/Card";
import "./LandingScreen.css";
import Footer from "../component/Footer";
import QuotesScreen from "./QuoteScreen";

const LandingScreen = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="cards">
        <Card
          src={
            "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus,
          voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti
          blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad
          inventore laudantium est illum voluptatem quis.
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae
          incidunt perferendis soluta facilis voluptas dicta repudiandae quasi
          asperiores libero, exercitationem molestiae autem sapiente dolore
          nulla non consequatur. Eaque, dolores.
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus,
          voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti
          blanditiis dolorum! Officia assumenda rem nam
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1599842057874-37393e9342df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus,
          voluptatibus repellendus fuga aperiam vel .
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit .
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus,
          voluptatibus .
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor exercitationem molestiae autem sapiente dolore nulla
          non consequatur. Eaque, dolores.
        </Card>

        <Card
          src={
            "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Ananya"
          position="Head of SEO"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur.
        </Card>
      </div>

      <Footer></Footer>
    </>
  );
};

export default LandingScreen;
