import Writting from "./assets/writting.svg";

function App() {
  return (
    <div className="flex flex-1 items-center justify-center h-screen bg-zinc-900">
      <div className="flex flex-col items-center">
        <img src={Writting} className="w-16 h-16" />
        <div className="mt-10 flex flex-col gap-2 items-center">
          <p className="text-zinc-100 font-roboto text-[32px] font-semibold">
            Faça algo mágico
          </p>
          <p className="font-roboto font-normal text-2xl text-zinc-400 mt-2">
            Ache sempre tudo em um só lugar
          </p>
        </div>
        <input
          className="w-[560px] rounded-lg mt-10 gap-[10px] py-4 px-6 outline-none bg-zinc-800"
          placeholder="Faça algo mágico"
        />
      </div>
    </div>
  );
}

export default App;
