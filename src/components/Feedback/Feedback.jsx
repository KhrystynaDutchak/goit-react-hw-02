import FeedbackItem from "../FeedbackItem/FeedbackItem"

export default function Feedback({ feedback, total, positive }) {
    return(
        <ul>
            <FeedbackItem label="Good" value={feedback.good} />
            <FeedbackItem label="Neutral" value={feedback.neutral} />
            <FeedbackItem label="Bad" value={feedback.bad} />
            <FeedbackItem label="Total" value={total} />
            <FeedbackItem label="Positive" value={positive + "%"} />
        </ul>
    )
    
  }
  