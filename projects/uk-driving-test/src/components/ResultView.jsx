import AnswerFeedback from "./AnswerFeedback";
import QuestionText from "./QuestionText";
import ScoreSummary from "./ScoreSummary";
import ExplanationText from "./ExplanationText"
import Card from "./ui/Card";
import MediaDisplay from "./MediaDisplay";

const ResultView = ({ score, questions, answers }) => {
  return (
    <>
      <ScoreSummary 
        score={score}
        total={questions.length} />

      {questions.map((q,index) => (
        <Card key={q.id}>
          <div style={{ display: "flex", gap: "1rem", flexDirection: "row"}}>
            <div style={{ flex: 1 }}>
              {/* QuestionText component display 
              - the current question */}
              <QuestionText text={q.question} as="h3" />
              {/* AnswerFeedback component shows:
                - the options
                - correct answer
                - user's selected answer. */}
              <AnswerFeedback 
                options={q.options}
                correctAnswer={q.correctAnswer}
                userAnswer={answers[index]}
                />

              {/* ExplanationText component displays:
                - the explanation for the question's answer. 
                */}
              <ExplanationText text={q.explanation} />

              {/* Conditionallly render MediaDisplay if the question type is:
                 'image' or 'video'. */}
              {(q.type === "image" || q.type === "video") && (
                <MediaDisplay 
                  key={q.id}
                  type={q.type}
                  image={q.image}
                  video={q.video}
                  autoPlayVideo={false}
                />

              )

              }
              
            </div>
          </div>
        </Card>
      ))}
      
    </>
  )
}

export default ResultView;