import { gql } from '@apollo/client';
import React from 'react';
import client from '../../apolloClient';

export default function TestSpace({amysGraphCmsTestSpace})  {

        return (
            <div>
                <h1>
                    {amysGraphCmsTestSpace.title}
                </h1>
                <img src={amysGraphCmsTestSpace.coverimage.url} alt={'${amysGraphCmsTestSpace.title} Cover Image'} /> 
                <div dangerouslySetInnerHTML={{__html:amysGraphCmsTestSpace.description.html}}   />
            </div>
        )
}


export async function getStaticPaths() {

    const {data} = await client.query({
        query: gql`
        query {
                amysGraphCmsTestSpaces {
                  slug
              }
            }
            `
    
      })
      
      const {amysGraphCmsTestSpaces} = data;
      const paths = amysGraphCmsTestSpaces.map( amysGraphCmsTestSpace => ({
          params: {slug: [amysGraphCmsTestSpace.slug]}

      }))
      console.log(paths)
      return {paths, fallback: false};
        
}

export async function getStaticProps({params}){
        const slug = params.slug[0];
    const {data} = await client.query({
        query: gql`
    
            query AmysGraphCmsTestSpaceBySlug($slug: String!){
            amysGraphCmsTestSpaces(where: { slug : $slug}) {
                  title
                  slug
                  streamDate
                  coverimage {
                    url
                  }
                    guestName
                    description {
                    raw
                    html
                }
                
            }
            }
    
        `,
        variables: {slug}
       
        })
        
      const {amysGraphCmsTestSpaces} = data;
      const amysGraphCmsTestSpace = amysGraphCmsTestSpaces[0];
      console.log(amysGraphCmsTestSpace);
      return { props: {amysGraphCmsTestSpace}}


}