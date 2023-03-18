import styles from './MainPage.module.scss';

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';

const MainPage = () => {
    return (
        <main className={styles.main__container}>
            <Header/>
            <Content/>
            <Footer/>
        </main>
    );
};

export default MainPage;