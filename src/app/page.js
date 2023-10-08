import { allBlogs } from 'contentlayer/generated'

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1>Hello World</h1>
    </main>
  )
}
