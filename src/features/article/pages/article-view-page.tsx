import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../hooks'
import { selectArticleByID } from '../articleSlice'

export const ArticleViewPage = () => {
  const { id } = useParams<{id: string}>()

  const article = useAppSelector(state => selectArticleByID(state, id))

  return (
    <>
      <header>
        <div className="pricing-header pb-md-4 mx-auto text-center">
          <h2>Article</h2>
        </div>
      </header>

      <main>
        {article && (
          <div className="row row-cols-1">
            {article.text}
          </div>
        )}

        {!article && (
          <div className="text-center">
            <h4 className="mb-4">404</h4>
            <Link className="btn btn-primary" to={'/'}>go home</Link>
          </div>
        )}
      </main>
    </>
  )
}
