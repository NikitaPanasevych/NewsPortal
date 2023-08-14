import SwiperComponent from '@/components/common/swiper';
import PageWrapper from '@/components/common/wrapper';
import '../styles/base.scss';
import CategorySection from './components/categorySection';

export default function Home() {
    return (
        <PageWrapper>
            <main>
                <SwiperComponent />
                <CategorySection />
            </main>
        </PageWrapper>
    );
}
