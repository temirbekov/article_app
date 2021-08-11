import './article.scss'

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  fetchArticles,
  selectArticles
} from './articleSlice'
import { ArticleItem } from './components/article-item'

export const Article = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)

  const getArticles = () => {
    dispatch(fetchArticles())
  }

  useEffect(() => {
    if (articles.length === 0) {
      getArticles()
    }
  }, [])

  return (
    <>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
        />
      ))}

      <button
        className="btn btn-lg btn-primary"
        onClick={() => getArticles()}
      >Load more</button>
    </>
  )
}
