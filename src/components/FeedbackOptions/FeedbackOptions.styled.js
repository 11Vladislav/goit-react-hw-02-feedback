import styled from 'styled-components';

export const Info = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: 700;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 10px;
    }
    `;

export const Container = styled.div`
    display: flex;
    `;    