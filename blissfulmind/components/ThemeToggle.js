import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    padding: 40px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.primary};
    }
`;

const ThemeToggle = ({ toggleTheme }) => {
    const handleToggle = () => {
        toggleTheme();
    };

    return <ToggleButton onClick={handleToggle}>Breathe</ToggleButton>;
};

export default ThemeToggle;
