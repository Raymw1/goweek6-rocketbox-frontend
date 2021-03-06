import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto 0;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 21px;
      padding-left: 15px;
      margin-left: 15px;
      border-left: 1px solid #ddd;
    }

    button svg {
      margin-right: 10px;
    }

    button:hover {
      opacity: 0.9;
    }
  }

  .upload {
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    border: 1px dashed #ddd;
    color: #999;
    margin-top: 50px;
    cursor: pointer;
  }

  ul {
    margin: 30px 0;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .fileInfo {
        display: flex;
        align-items: center;
        text-decoration: none;

        strong {
          font-weight: normal;
          font-size: 14px;
          margin-left: 10px;
          color: #333;
        }
      }

      span {
        color: #999;
        font-size: 13px;
      }
    }

    li + li {
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid #eee;
    }
  }
`;
