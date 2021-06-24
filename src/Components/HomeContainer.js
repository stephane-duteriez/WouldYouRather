import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListQuestions from './ListQuestions';
import MainWrapper from './MainWrapper';

/**
 * @description Home Container
 * @return {Component}
 */
export default function HomeContainer() {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <MainWrapper square>
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
    </MainWrapper>
  );
};
