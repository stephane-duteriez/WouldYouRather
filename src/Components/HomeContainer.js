import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListQuestions from './ListQuestions';

/**
 * @description Home Container
 * @param {object} props
 * @return {Component}
 */
export default function HomeContainer(props) {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container >
      <Paper square>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="chose between answered and answered question"
        >
          <Tab label="Unanswered" />
          <Tab label="answered"/>
        </Tabs>
        <ListQuestions type={tab===0?'unanswered':'answered'}/>
      </Paper>
    </Container>
  );
};
