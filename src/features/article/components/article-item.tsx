import React from 'react'
import { Link } from 'react-router-dom'

import { ArticleItemProps } from '../types'

export const ArticleItem = ({
  article
} : ArticleItemProps) => {
  return (
    <>
      <div className="card p-0 mb-4 rounded-3 shadow-sm">
        <div className={'card-body'}>
          <p>{article.text.split('. ', 1)[0]}...</p>
          <Link className="btn btn-primary" to={`/article/${article.id}`}>View</Link>
        </div>
      </div>
    </>
  )
}
