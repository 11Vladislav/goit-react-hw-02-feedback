import PropTypes from 'prop-types';
import { Info, Container } from './FeedbackOptions.styled'

export const FeedbackOptions = () => {
    return (
        <Container>
        <Info>{'Good'}</Info>
         <Info>{'Bad'}</Info>
        <Info>{'Neutral'}</Info>
        </Container>
    );
    }

export default FeedbackOptions;
