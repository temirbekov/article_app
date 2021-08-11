import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.scss'
import { ArticleListPage } from './features/article/pages/article-list-page'
import { ArticleViewPage } from './features/article/pages/article-view-page'
import { MainLayout } from './layouts/main'

function App () {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <ArticleListPage />
          </Route>
          <Route path="/article/:id">
            <ArticleViewPage />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
