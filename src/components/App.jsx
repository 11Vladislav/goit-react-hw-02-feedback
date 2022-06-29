import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import  Statistics  from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
    
  counterTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  counterPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.counterTotalFeedback()) * 100);
  }


  counterOfFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options}
            onBtnClick={this.counterOfFeedback} />
        </Section>
        <Section
          title={'Statistics'}>
          
          {this.counterTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.counterTotalFeedback()}
              positivePercentage={this.counterPositiveFeedbackPercentage() + '%'}
            />) : <Notification message='There is no feedback' />
          }
        </Section>
      </>
    );
  }
}