"use client";
import "./quizSearch.scss";
import { useRef } from "react";
import { FormEvent } from "react";

interface QuizSearchProps {
  e: FormEvent<HTMLFormElement>;
}

export default function QuizSearch({ e }: QuizSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const goToQuizPage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const topic = inputRef.current?.value;
    if (topic) {
      window.location.href = `/quiz/${topic}`;
    }
  };

  return (
    <div className="quizSearchComponent">
      <div className="tittle">
        <h1>Welcome to PixiQuiz</h1>
      </div>

      <form className="searchComponent" onSubmit={goToQuizPage}>
        <input ref={inputRef} type="text" placeholder="Enter a topic" />
        <button>Generate Quiz</button>
      </form>
    </div>
  );
}
