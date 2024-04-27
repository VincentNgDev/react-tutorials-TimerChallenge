import Player from "./components/player";
import TimeChallenges from "./components/time-challenges";

export default function HomePage() {
  return (
    <div className="home-page max-w-4.5xl my-8 mx-auto p-8 rounded-2xl bg-radial-gradient from-hp-content-bg-from-color to-hp-content-bg-to-color shadow-hp-content-box-shadow">
      <header>
        <h1 className="font-handjet-mono text-center uppercase shadow-hp-h1-txt-shadow/40 text-size-iii-d5 m-0">
          The <em className="not-italic text-hp-h1-txt-em-color">Almost</em>{" "}
          Final Countdown
        </h1>
        <p className="text-size-i-d2 m-0 text-center text-hp-p-txt-color">
          Stop the timer once you estimate that time is (almost) up
        </p>
      </header>
      <main>
        <section className="text-center">
          <Player />
        </section>

        <section>
            <TimeChallenges />
        </section>
      </main>
    </div>
  );
}
