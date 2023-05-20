// ThemeToggle.js

import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
    /* Button styles */
`;

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ToggleButton onClick={handleToggle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
        </ToggleButton>
    );
};

export default ThemeToggle;
