import CategoryCard from './categoryCard';
import styles from './styles.module.scss';

const CategorySection = () => {
    return (
        <section className={styles.category}>
            <h2 className={styles.category__title}>SHOP BY CATEGORY</h2>
            <div className={styles.category_content}>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </section>
    );
};

export default CategorySection;
