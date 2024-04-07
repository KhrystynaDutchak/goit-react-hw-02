import { useState, useEffect } from 'react';

import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {

  const getFeedbacks = () => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) : { good: 0, neutral: 0, bad: 0 };
  }

  const [feedback, setFeedback] = useState(getFeedbacks());
console.log(feedback);
  useEffect(()=> {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    });
   }

   const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

   const { good, neutral, bad } = feedback;
   const totalFeedback = good + neutral + bad;
   const positive = Math.round((good / totalFeedback) * 100)

  return (
    <>
      <Description/>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ?  
        <Feedback feedback={feedback} total={totalFeedback} positive={positive}/> : 
        <Notification message="No feedback yet"/>
      }
    </>
  )
}

export default App
