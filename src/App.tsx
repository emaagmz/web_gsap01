import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main className="flex-center h-[100vh]">
      <Navbar />
    </main>
  )
}

export default App
