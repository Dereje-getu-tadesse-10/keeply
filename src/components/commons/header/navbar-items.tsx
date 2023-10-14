import Link from 'next/link'
import { Button } from '$/components/ui'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useNavbarStore } from '$/stores/navbar'

export const NavbarItems = () => {
  const { data: session } = useSession()
  const { toggleNavbar } = useNavbarStore()
  return (
    <>
      <Link href="/" onClick={toggleNavbar}>
        Accueil
      </Link>
      <Link href="/" onClick={toggleNavbar}>
        À propos
      </Link>
      {session ? (
        <>
          <Link href="/dashboard" onClick={toggleNavbar}>
            Dashboard
          </Link>
          <Button
            onClick={() => {
              signOut()
              toggleNavbar()
            }}
          >
            Me déconnecter
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            signIn()
            toggleNavbar()
          }}
        >
          Me connecter
        </Button>
      )}
    </>
  )
}
