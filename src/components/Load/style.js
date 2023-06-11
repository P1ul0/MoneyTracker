import styled from "styled-components";


export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const Load = styled.div`
  height: 80px;
  width: 80px;
  border: var(--border-width) solid white;
  transform: rotate(45deg);
  border-radius: 0 50% 50% 50%;
  position: relative;
  animation: move 0.5s linear infinite alternate-reverse;

&::before {
  content: "";
  position: absolute;
  height: 55%;
  width: 55%;
  border-radius: 50%;
  border: var(--border-width) solid transparent;
  border-top-color: white;
  border-bottom-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes move {
  to {
    transform: translateY(15px) rotate(45deg);
  }
}
`