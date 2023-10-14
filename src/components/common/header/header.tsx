"use client"
import styles from "./header.module.css"
import { Button } from "$/components/ui"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"


export const Header = () => {
    const { data: session } = useSession()

    return (
        <header className={styles.header}>
            <Link href="/">Keeply</Link>
            <nav className={styles.header__nav}>
                <Link href="/">
                    Accueil
                </Link>
                {session ? (
                    <>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    <Button onClick={() => signOut()}>
                        Me déconnecter
                    </Button>
                    </>
                ) : (
                    <Button onClick={() => signIn()}>
                        Me connecter
                    </Button>
                )}
            </nav>
        </header>
    )
}