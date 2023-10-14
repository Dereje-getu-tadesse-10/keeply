import { auth } from '$/lib/auth'
import { countCollections, countItems, getCollections } from '$/lib/queries'
import { Session } from 'next-auth'

const Page = async () => {
  const user: Session | null = await auth()

  const getMyCollections = await getCollections(user?.id)
  const getCollectionsCount = await countCollections(user?.id)
  const getItemCount = await countItems(user?.id)

  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  )
}

export default Page
