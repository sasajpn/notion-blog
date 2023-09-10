import Link from 'next/link';

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/v1/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
          {/* Render other post details */}
        </div>
      ))}
    </div>
  );
}
