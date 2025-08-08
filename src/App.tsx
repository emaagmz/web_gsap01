import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="min-h-dvh bg-black" />
    </main>
  )
}

export default App
