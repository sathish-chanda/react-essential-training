import Card from "./ui/Card"
import QuestionHeader from "./QuestionHeader";
import QuestionText from "./QuestionText";
import AnswerOptions from "./AnswerOptions";
const QuestionView = ( {
  q,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  timeLeft,
  dispatch,
}) => {
  return (
    <Card>
      <QuestionHeader currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeLeft={timeLeft} />
      <div style={{ display: "flex", gap: "1rem", flexDirection: "row"}}>
         <div style={{ flex: 1}}>
          <QuestionText text={q.question} />
         </div>
      </div>
      <AnswerOptions options={q.options} 
        selectedIndex={selectedAnswer}
        onSelect={onAnswer}
      />
    </Card>
  )
}

export default QuestionView;