import styles from './MainPage.module.css';

import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

const MainPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.main__container}>
                <Content/>
                <Footer/>
            </main>
        </>
    );
};

export default MainPage;