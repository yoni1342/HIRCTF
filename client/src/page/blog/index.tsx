import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "../../components/ScrollTop";


const blog_query = gql`
  {
    blogs {
      edges {
        node {
          blogMeta {
            content
            coverimage {
              sourceUrl
            }
            title
          }
        }
      }
    }
  }
`;

export default function Index() {
  const { data, loading, error } = useQuery(blog_query);
  if (loading) return <pre>"Loding"</pre>;
  if (error) return <pre>{error.message}</pre>;
  console.log(data)
  const dataa = data.blogs.edges
  const htmlcontent = dataa[0].node.blogMeta.content
  console.log(htmlcontent)

  return (
    <div>
      <Navbar name="blogs" />
      <div>
        <div>
          
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:h2 md:h3 sm:h4 h5 px-3 py-7 lg:w-[70%]">
          {dataa[0].node.blogMeta.title}
          </h2>
          {/* <div className="py-10 px-7 leading-8 space-y-5 lg:w-[70%] prose"> */}
            {/* <Markdown> */}
              {/* {htmlcontent} */}
              {/* This is *italic* this is **bold** */}
            {/* </Markdown> */}
          {/* </div> */}
          <div className="py-10 px-7 leading-8 space-y-5 lg:w-[70%] prose-lg" dangerouslySetInnerHTML={{__html: htmlcontent}}>
            
            {/* <p className="text-md font-light mt-2 ">
            </p> */}
          </  div>
        </div>
      </div>
      <Footer />
      <div>
        <ScrollToTop /> 
      </div>
    </div>
  );
}
  