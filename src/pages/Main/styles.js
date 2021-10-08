import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    max-width: 30rem;
    width: 90%;
    display: flex;
    flex-direction: column;

    input {
      height: 4.8rem;
      border: 1px solid #ddd;
      border-radius: 0.4rem;
      font-size: 16px;
      padding: 0 2rem;
      margin-top: 3rem;
    }
  }
`;

export const SubmitButton = styled.button`
  height: 4.8rem;
  background-color: ${(props) => props.color || "#7159c1"};
  border: 0;
  border-radius: 0.4rem;
  font-size: 16px;
  padding: 0 2rem;
  margin-top: 1rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
