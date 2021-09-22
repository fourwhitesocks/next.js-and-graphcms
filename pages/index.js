import { gql } from '@apollo/client'
import Head from 'next/head'
import client from '../apolloClient'
import Link from 'next/link'

export default function Home({amysGraphCmsTestSpaces}) {
  console.log(amysGraphCmsTestSpaces);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Amy Test Spaces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>First Next.js blog with Graph CMS and James Quick's:  Learning Quick</h1>
        
        
      <h2>this is mapping over the query and then it's returning  the title </h2>

      <ul>
        
        {amysGraphCmsTestSpaces.map( (amysGraphCmsTestSpace, i) => <li key={i}><Link href={`/amysGraphCmsTestSpaces/${amysGraphCmsTestSpace.slug}`}>{amysGraphCmsTestSpace.title}</Link></li> )}
          
      </ul>
         
        
    </div>
  )
}

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`

          query {
            amysGraphCmsTestSpaces {
              title
              slug
              streamDate
              coverimage {
                url
              }
              guestName
            description {
              raw
            }
            
          }
        }

    `

  })
  // this video 18:46 mins in really explains this super well!  https://youtu.be/oUZLx79AN1A
  const {amysGraphCmsTestSpaces} = data;
  return {
    props: {
      amysGraphCmsTestSpaces
    }
  }

}
