import { auth } from '$/lib/auth'
import { countCollections, countItems, getCollections } from '$/lib/queries'
import { Session } from 'next-auth'
import { CreateCollection } from '$/components/forms/create-collection/create-collection'

const Page = async () => {
  const user: Session | null = await auth()

  const getMyCollections = await getCollections(user?.user.id)
  const getCollectionsCount = await countCollections(user?.user.id)
  const getItemCount = await countItems(user?.user.id)
  console.log(getMyCollections)
  const collections = getMyCollections?.map((collection) => {
    return (
      <div key={collection.id}>
        <h2>{collection.name}</h2>
        <p>{collection.status}</p>
      </div>
    )
  })
  return (
    <main>
      <CreateCollection userId={user?.user.id} />
      <div>
        <h1>Dashboard</h1>
        <p>
          You have {getCollectionsCount} collections and {getItemCount} items
        </p>
        {collections}
      </div>
    </main>
  )
}

export default Page
