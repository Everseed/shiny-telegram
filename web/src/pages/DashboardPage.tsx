import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.background.light};
  padding-top: 80px; // Pour le header fixe
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${colors.text.primary};
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  background: ${colors.background.light};
  height: 8px;
  border-radius: 4px;
  margin: 1rem 0;
  overflow: hidden;
`;

const Progress = styled.div<{ value: number }>`
  background: ${colors.primary};
  height: 100%;
  width: ${props => props.value}%;
  transition: width 0.3s ease;
`;

const Stat = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    color: ${colors.primary};
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.text.secondary};
  }
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const DashboardPage = () => {
  return (
    <Container>
      <Content>
        <Grid>
          <Card>
            <Title>Progression</Title>
            <ProgressBar>
              <Progress value={75} />
            </ProgressBar>
            <p>75% des objectifs atteints</p>
          </Card>

          <Card>
            <Title>Statistiques</Title>
            <Grid>
              <Stat>
                <h3>12</h3>
                <p>Leçons complétées</p>
              </Stat>
              <Stat>
                <h3>5</h3>
                <p>Jours consécutifs</p>
              </Stat>
            </Grid>
          </Card>

          <Card>
            <Title>Prochaine leçon</Title>
            <p>Introduction aux tons</p>
            <ProgressBar>
              <Progress value={30} />
            </ProgressBar>
          </Card>
        </Grid>

        <Card>
          <Title>Mes cours</Title>
          <CourseList>
            <CourseCard>
              <h3>Bases de la langue</h3>
              <ProgressBar>
                <Progress value={60} />
              </ProgressBar>
            </CourseCard>
            <CourseCard>
              <h3>Prononciation</h3>
              <ProgressBar>
                <Progress value={40} />
              </ProgressBar>
            </CourseCard>
            <CourseCard>
              <h3>Vocabulaire</h3>
              <ProgressBar>
                <Progress value={20} />
              </ProgressBar>
            </CourseCard>
          </CourseList>
        </Card>
      </Content>
    </Container>
  );
};

export default DashboardPage; 