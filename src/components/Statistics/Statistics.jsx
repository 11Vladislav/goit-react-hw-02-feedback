import PropTypes from 'prop-types';
import { Title, Info, Container } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positive = good / total;
    return (
        <Container>
        <Title>Statisctics</Title>    
        <Info>{`Good: ${good}`}</Info>
        <Info>{`Neutral: ${neutral}`}</Info>
        <Info>{`Bad: ${bad}`}</Info>
        <Info>{`Total: ${total}`}</Info>
        <Info>{`Positive feedback: ${positive}`}</Info>
        </Container>
    );
}
    
// Statistics.propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
// }
