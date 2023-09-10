import { getPostBySlug, getPosts } from '../../lib/posts';

function PostDetail({ post }) {
  // ... Rest of the component remains the same
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(post => ({
    params: { slug: post.properties.Slug.text.content },
  }));
  
  return { paths, fallback: true }; // Using fallback mode
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export default PostDetail;