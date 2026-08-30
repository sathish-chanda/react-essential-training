import { useReducer } from "react"
import questions from "./data/questions"
import { quizReducer } from "./state/quizReducer"
import TempComponent from "./components/tempComponent"
import "./App.css"
import QuestionView from "./components/QuestionView"

const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  // Total time allowed for the quiz in seconds (57 minutes)
  timeLeft: 57*60
}

const App = () => {
  const [state,dispatch] = useReducer(
    (state,action) => quizReducer(state,action),
    initialState
  )

  const q = questions[state.currentQuestion]
  const questionView = (
    <QuestionView 
        q={q} 
        currentQuestion={state.currentQuestion} 
        totalQuestions={state.answers.length} 
        selectedAnswer={state.answers[state.currentQuestion]} 
        onAnswer={()=> console.log("Answered")}
        timeLeft={state.timeLeft}
        dispatch={dispatch} />
  )
  
  const resultView = (<></>)
  return (
    <div className="app-container">
      <TempComponent state={state} dispatch={dispatch} />
      <div className="quiz-content">
        {state.submitted ? resultView : questionView}
      </div>
    </div>
  )
}

export default App
