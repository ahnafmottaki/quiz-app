import data from "../data.json";
import { chunkArray } from "../utils/chunkArray";

interface Topic {
  title: string;
  icon: string;
}
const QuizTopics = () => {
  let topics: Topic[] = data.quizzes.map((quiz) => ({
    icon: quiz.icon,
    title: quiz.title,
  }));
  topics = [...topics, ...topics, ...topics];
  const limit = 4;
  const chunkTopics = chunkArray(topics, limit);

  return (
    <>
      {chunkTopics.map((topicArr) => (
        <div className="flex flex-col gap-4">
          {topicArr.map((topic) => (
            <div
              key={topic.icon + topic.title}
              className="flex items-center p-4 bg-[#3B4D66] gap-4 rounded-xl lg:max-w-[564px] hover:scale-105 transition-transform duration-150 cursor-pointer"
            >
              <div className="h-10 md:h-14 aspect-square rounded-lg flex justify-center items-center bg-green-100">
                <img
                  className="h-7 md:h-10 aspect-square"
                  src={topic.icon}
                  alt={topic.title}
                />
              </div>
              <span className="font-medium text-lg md:text-[28px] leading-[100%] text-foreground">
                {topic.title}
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default QuizTopics;
