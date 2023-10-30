import "./App.css";
import GetStartedCard from "./components/GetStartedCard";
import SubscribeCard from "./components/SubscribeCard";
import TaxForm from "./components/TaxForm";

function App() {
  return (
    <>
    <div className=" m-4 md:ml-[3.5rem] md:m-[1.25rem]">
      <div className="flex flex-col md:flex-row">
        <div>
      <TaxForm/>

        </div>
        <div className=" md:block hidden">
          <GetStartedCard/>
        </div>
      </div>
    </div>
      <SubscribeCard/>
      </>
  );
}

export default App;
