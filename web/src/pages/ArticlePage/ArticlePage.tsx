// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

interface Props {
    id: number
}

const ArticlePage = ({id}: Props) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />
      <h3>ArticlePage "layout"</h3>


        {/* Find me in <code>./web/src/pages/ArticlePage/ArticlePage.tsx</code>
      */}

        {/* My default route is named `article`, link to me with:
          `<Link to={routes.article()}>Article</Link>` */}


      <ArticleCell id={id}/>



    </>
  )
}

export default ArticlePage
