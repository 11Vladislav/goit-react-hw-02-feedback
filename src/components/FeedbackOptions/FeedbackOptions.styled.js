import styled from 'styled-components';

export const FeedbackList = styled.ul`
    display: flex;
    `;

export const FeedbackItem = styled.li`
    &:not(:last-child) {
        margin-right: 5px;
    }
    `;    

export const FeedbackBtn = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: 700;
    padding: 10px;
   
`    