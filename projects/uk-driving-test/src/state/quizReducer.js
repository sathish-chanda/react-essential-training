export function quizReducer(state,action) {
  switch(action.type) {
    case "ANSWER": {
      const newAnswers = [...state.answers]
      newAnswers[state.currentQuestion] = action.payload
      return {...state, answers: newAnswers}
    }
    case "NEXT": {
      return { 
        ...state, 
        currentQuestion: Math.min(state.currentQuestion + 1,state.answers.length - 1)
      }
    }
    case "PREVIOUS": {
      return { 
        ...state,
        currentQuestion: Math.max(0, state.currentQuestion - 1)
      }
    }
    case "SUBMIT": {
      return {...state, submitted: true}
    }
    case "TICK": {
      return {
        ...state,
        timeLeft: Math.max(state.timeLeft - 1,0)
      }
    }
    default:
      return state
  }
}