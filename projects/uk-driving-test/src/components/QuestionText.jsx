const QuestionText = ({text, as = "p"}) => {
  const Tag = as; // "p" or "h3"
  return (
    <Tag style={{
      fontSize: "1.2rem",
      marginBottom: "1rem",
    }}>
      {text}
    </Tag>
  )
}

export default QuestionText;