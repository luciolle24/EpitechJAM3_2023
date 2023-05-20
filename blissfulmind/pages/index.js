import ThemeToggle from "@/components/ThemeToggle";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Breathball = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.secondary};
    animation: pulse 2s infinite;
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        }
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
        }
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
    }
`;

export default function Home() {
    return (
        <Container>
            <Breathball />
            <ThemeToggle />
        </Container>
    );
}
