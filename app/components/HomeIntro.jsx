import NavBar from "../NavBar";

export default function HomeIntro() {

    return (
      <div className="flex flex-col w-1/2">
        <NavBar />
        <div className="flex flex-col justify-center h-screen">
        <h2 className="text-4xl font-mono font-bold text-secondary">Hi, My name is Kaleigh. Im an</h2>
        <h1 className="text-6xl font-sans font-bold uppercase text-primary">aspiring frontend developer and Computer Science AI student</h1>
      </div></div>
    );
  }