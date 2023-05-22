import Quote from "@/components/Quote";
import ThemeToggle from "@/components/ThemeToggle";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.secondary};
    flex-direction: column;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary};
`;

const A = styled.a`
    color: ${(props) => props.theme.colors.primary};
`;
const Breathball = styled.div`
    padding: 200px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.secondary};
    animation: pulse 1.5s infinite;
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        }
        80% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
        }
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
    }
`;

const HomePage = ({ toggleTheme }) => {
    return (
        <Container>
            <Title>BlissfulMind</Title>
            <Breathball>
                <ThemeToggle toggleTheme={toggleTheme} />
            </Breathball>
            <Quote />
            <Title>Inspirational quotes provided by </Title>
            <A href="https://zenquotes.io/" target="_blank">
                ZenQuotes API
            </A>
        </Container>
    );
};

export default HomePage;
