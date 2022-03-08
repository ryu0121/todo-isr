import Head from 'next/head'
import { getTodosFromDB } from '../lib/clients/todos'
import Link from 'next/link'

// default エクスポートしているコンポーネントがページになる
const Home = ({allTodos}) => {
  return (
    <>
      <Head>
        <title>Todo app</title>
      </Head>
      <section>
        <h1>Todos</h1>
        <ul>
          {allTodos.map(({id, title, description, expiration}) => (
            <li key={id}>
              <Link href={`/todos/${id}`}>
                <a>{title}</a>
              </Link>
              <p>{description}</p>
              <p>{expiration}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
export default Home;

export const getStaticProps = () => {
  const allTodos = getTodosFromDB()
  return {
    // allTodos: [...] の省略形
    props: {
      allTodos
    },
    revalidate: 10
  }
}