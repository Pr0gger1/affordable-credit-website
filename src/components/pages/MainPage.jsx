import styles from './MainPage.module.css';

import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

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