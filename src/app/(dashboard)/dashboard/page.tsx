import { auth } from '$/lib/auth'

const Page = async () => {
  const user = await auth()

  console.log(user)
  return <h1>Hello</h1>
}

export default Page
