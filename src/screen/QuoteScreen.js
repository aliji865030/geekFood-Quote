import "./QuoteScreen.css";
import { data } from "./../component/data";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function QuotesScreen() {
  return (
    <>
      <Navbar />

      <div className="quotesOuter">
        {data.map((item, index) => {
          return (
            <div className="quoteCards">
              <h1>{item.quote}</h1>
              <p>{item.author}</p>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
export default QuotesScreen;
