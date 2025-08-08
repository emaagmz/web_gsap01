import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {

    useGSAP(() => {
        gsap.from('#green-box', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'power1.inOut'
        })
    }, [])

    return(
        <main className="bg-gray-900 min-h-screen p-10">
            <h1 className="text-gray-50">Gsap From</h1>

            <p className="mt-5 text-gray-50">
                El método <code>gsap.from()</code> se utiliza para animar elementos desde un nuevo estado hasta su estado actual.
            </p>
            <p className="mt-5 text-gray-50">
                El método <code>gsap.from()</code> es similar al método <code>gsap.to()</code>, pero la diferencia es que el método <code>gsap.from()</code> anima elementos desde un nuevo estado hasta su estado actual, mientras que el método <code>gsap.to()</code> anima elementos desde su estado actual hasta un nuevo estado.
            </p>

            <p className="mt-5 text-gray-50">
                Más información sobre el método{" "}
                <a href="https://greensock.com/docs/v3/GSAP/gsap.from()">
                    gsap.from().
                </a>
            </p>

            <div className="mt-20">
                <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
            </div>
        </main>
    )
}

export default GsapFrom;