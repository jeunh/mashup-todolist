import React from "react";
import { styled } from "styled-components";

const TodoHeadBlock = styled.div `
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 20px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 16px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 14px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2023년 6월 13일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  )
}

export default TodoHead;