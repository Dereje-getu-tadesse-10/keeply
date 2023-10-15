import { auth } from '$/lib/auth'
import { countCollections, countItems, getCollections } from '$/lib/queries'
import { Session } from 'next-auth'
import { CreateCollection } from '$/components/forms/create-collection/create-collection'

const Page = async () => {
  const user: Session | null = await auth()

  const getMyCollections = await getCollections(user?.user.id)
  const getCollectionsCount = await countCollections(user?.user.id)
  const getItemCount = await countItems(user?.user.id)

  return (
    <main>
      <CreateCollection userId={user?.user.id} />
    </main>
  )
}

export default Page
