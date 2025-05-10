import Header from "./component/header";
import Game from "./component/game";

function App() {

  return (
    <>
      <section className="w-screen md:h-screen flex flex-col justify-center items-center m-auto">
        <div className="max-w-sm border rounded-sm px-4 flex flex-col gap-10 justify-center h-full md:h-auto md:min-h-3/4  bg-[radial-gradient(50%_50%_at_center_center,#062314_15%,#0c342c_35%,#076653)] text-white">
          <Header /> 
          <Game />  

        </div>
      </section>
    </>
  )
}

export default App
