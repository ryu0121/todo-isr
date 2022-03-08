import { getAllTodoIds, getTodoFromDB } from '../../lib/clients/todos'
import Head from 'next/head'
import Link from 'next/link'

// default エクスポートしているコンポーネントがページになる
const Todo = ({ todo }) => {
  return (
    <>
      <Head>
        <title>{todo.title}</title>
      </Head>
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <p>{todo.expiration}</p>
      </div>
      <div>
        <Link href="/">
          <a>← ダッシュボードへ戻る</a>
        </Link>
      </div>
    </>
  )
}
export default Todo;

// params には [id].js を参照して idキー が入っている
export const getStaticProps = ({ params }) => {
  const todo = getTodoFromDB(params.id)
  return {
    props: {
      todo
    },
    // 10秒間は古いHTMLページ(キャッシュ)を使用する
    // 古いキャッシュを返しつつ、サーバーでは再レンダリングを行う
    revalidate: 10
  }
}

export const getStaticPaths = () => {
  const paths = getAllTodoIds();
  return {
    paths,
    fallback: false
  }
}