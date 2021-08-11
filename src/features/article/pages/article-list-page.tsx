import React from 'react'
import { Article } from '../article'

export const ArticleListPage = () => {
  return (
    <>
      <header>
        <div className="pricing-header pb-md-4 mx-auto text-center">
          <h2>List</h2>
        </div>
      </header>

      <main>
        <div className="row row-cols-1">
          <Article />
        </div>
      </main>
    </>
  )
}
