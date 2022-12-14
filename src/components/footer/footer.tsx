import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Link to="/" className={styles.name}>QPICK</Link>
            <section className={styles.box}>
                <a className={styles.text}>Избранное</a>
                <Link to="/cart" className={styles.text}>Корзина</Link>
                <a className={styles.text}>Контакты</a>
            </section>
            <section className={styles.box}>
                <a className={styles.text}>Условия сервиса</a>
                <div className={styles.inner}>
                    <img
                        src={require('../../assets/icons/globe.svg').default}
                        className={styles.globe} />
                    <a className={styles.text}>Каз</a>
                    <a className={styles.active} href=''>Рус</a>
                    <a className={styles.text}>Eng</a>
                </div>
            </section>
            <section className={styles.iconBox}>
                <img
                    src={require('../../assets/icons/VK.svg').default}
                    className={styles.icon} />
                <img
                    src={require('../../assets/icons/Telegram.svg').default}
                    className={styles.icon} />
                <img
                    src={require('../../assets/icons/Whatsapp.svg').default}
                    className={styles.icon} />
            </section>
        </footer>
    )
}