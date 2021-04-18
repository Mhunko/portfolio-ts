import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme, GlobalStyle } from './theme';
import { Bio } from './pages/Bio';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <BrowserRouter>
      <Switch>
          <Route path="/bio" exact component={Bio} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
      </Switch>
  </BrowserRouter>
</ThemeProvider>,
  document.getElementById('root')
);
