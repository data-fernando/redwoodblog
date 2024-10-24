import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'
import { Link, routes } from '@redwoodjs/router'
import Article from 'src/components/Article'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'


export const QUERY: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> =
// con typescript cada vez que se edite esto (gql) hay que ejecutar >>yarn rw g types
  gql`

    query ArticlesQuery {
      articles:posts {
        id
        title
        body
        createdAt
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return(
  <>
  <h4>lista de articulos (articlesCell: ): <br /></h4>

      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}
