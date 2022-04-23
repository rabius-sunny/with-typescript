import Link from 'next/link'
import Layout from '../components/Layout'

const UserPage = () => (
  <Layout title="User | Next.js + TypeScript Example">
    <h1>User</h1>
    <p>This is the user page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default UserPage
