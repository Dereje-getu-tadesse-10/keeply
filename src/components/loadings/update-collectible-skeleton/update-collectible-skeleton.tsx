import styles from "./update-collectible-skeleton.module.css"

export const UpdateCollectibleSkeleton = () => (
    <div className={styles.loading_container}>
        <div className={styles.loading_header}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={styles.loading_form}>
            {[...Array(3)].map((_, index) => (
                <div key={index}></div>
            ))}
        </div>
        <div></div>
    </div>
)