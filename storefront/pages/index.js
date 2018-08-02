import Layout from '../components/TheLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { AnchorButton, Elevation, Card, Button, Tab, Tabs  } from "@blueprintjs/core";
import '../styles/style.scss'

const Index = (props) => (
  <Layout>
    <div className="container">
      <h1>Batman TV Shows</h1>


        <ul>
          {props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index