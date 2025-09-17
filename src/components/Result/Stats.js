import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';

import ShareButton from '../ShareButton';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment>
      <div className="results-header">
        <Header as="h1" textAlign="center">
          {remarks}
        </Header>
        <Header as="h2" textAlign="center">
          Grade: {grade}
        </Header>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{totalQuestions}</h3>
          <p>Total Questions</p>
        </div>
        <div className="stat-card">
          <h3>{correctAnswers}</h3>
          <p>Correct Answers</p>
        </div>
        <div className="stat-card">
          <h3>{score}%</h3>
          <p>Your Score</p>
        </div>
        <div className="stat-card">
          <h3>60%</h3>
          <p>Passing Score</p>
        </div>
        <div className="stat-card">
          <h3>{`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}</h3>
          <p>Time Taken</p>
        </div>
      </div>
      <div style={{ marginTop: 35, textAlign: 'center' }}>
        <Button
          primary
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          secondary
          content="Back to Home"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
        <ShareButton />
      </div>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Stats;
