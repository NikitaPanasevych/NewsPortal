import Image from 'next/image';
import styles from './styles.module.scss';

const CategoryCard = () => {
    return (
        <div className={styles.categoryCard}>
            <div className={styles.categoryCard_image}>
                <img
                    src="https://www.virginwines.co.uk/hub/wp-content/uploads/Red_Wine_Shot-70.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>

            <span>Read wine</span>
        </div>
    );
};

export default CategoryCard;
