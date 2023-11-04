import styles from "./collection-page-skeleton.module.css"

export const CollectionPageSkeleton = () => {
    return (
        <div>
            <div className={styles.loading_header}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.loading_list}>
                {[...Array(7)].map((_, index) => (
                    <div key={index}></div>
                ))}
            </div>
        </div>
    )
};