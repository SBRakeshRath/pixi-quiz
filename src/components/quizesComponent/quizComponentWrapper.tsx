import GenerateQuizAI from "@/ai/generateQuiz.ai";
import QuizzesComponent from "./quizesComoonent";
import { QuizData } from "./quizesComoonent";
import { Suspense } from "react";
import Loading from "@/app/quiz/[topic]/loading";
import ErrorContainer from "./errorContaainer";

export default async function QuizComponentWrapper({
  topic,
}: {
  topic: string;
}) {
  if(topic.length > 45) {
    return <ErrorContainer message="Topic name too long" />;
  }
  const quizData: QuizData = await GenerateQuizAI(
    decodeURIComponent(topic)
  );

  if (!quizData) {
    return <ErrorContainer message="Error while fetching quizzes" />;
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <QuizzesComponent quizData={quizData} />
      </Suspense>
    </>
  );
}
