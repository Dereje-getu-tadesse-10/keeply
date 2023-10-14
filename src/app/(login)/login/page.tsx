import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import { Auth } from "$/components/forms/index"

export default function Login() {
    return (
        <main className={styles.main}>
            <header className={styles.main__header}>
                <Image src="/keeply.svg" alt="keeply logo" width={80} height={80} />
                <h1>
                Me connecter
                </h1>
            </header>
            <section className={styles.main__section}>
                <Auth />
            </section>
            <footer className={styles.main__footer}>
                <Link href="/">
                    Retour à l&apos;accueil
                </Link>
                <Link href="/">
                    Politique de confidentialité
                </Link>
            </footer>
        </main>
    )
}