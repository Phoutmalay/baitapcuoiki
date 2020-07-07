import React from 'react';
import styled from 'styled-components';

const Welcome = (props) => {
  return (
    <Container>
      <Title> Quản lý lớp học hoàn thành khóa học </Title>
      <Title> Người thực hiên: PhutMalay </Title>
    </Container>
  );
};

export default Welcome;
const Container = styled.div`
  margin: 0 auto;
  width: min(100%, 960px);
  height: 300px;
  display: flex;
  flex-direction: column;
  background: #f091f2;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin: 0 auto;
  margin-top: 1rem;
`;
