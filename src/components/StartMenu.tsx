import QuizTopics from "./QuizTopics";

export default function StartMenu() {
  return (
    <main>
      <section className="mt-14.5 space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-4">
        <div>
          <h1 className="font-light text-[2.5rem] md:text-[4rem] leading-[100%] ">
            Welcome to the <br />
            <span className="font-medium">Frontend Quiz</span>
          </h1>
          <p className="text-seondary-foreground italic text-sm md:text-[1.25rem] leading-[150%] mt-4">
            Pick a subject to get started.
          </p>
        </div>

        <QuizTopics />
      </section>
    </main>
  );
}
