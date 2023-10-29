import "./App.css";
import GetStartedCard from "./components/GetStartedCard";
import TaxForm from "./components/TaxForm";

function App() {
  return (
    <div className=" m-4 md:ml-[3.5rem] md:m-[1.25rem]">
      <div className="md:flex">
        <div>
      <TaxForm/>

        </div>
        <div className="absolute md:static md:block hidden">
          <GetStartedCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
