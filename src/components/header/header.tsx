import * as React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
import styles from './header.module.css'

export default function Header() {

    const { cart } = useSelector((state: TRootState) => state.mainStore);
    const amount = cart.reduce((a, b) => a + b.number, 0);

    return (
        <header className={styles.header}>
            <h1>QPICK</h1>
            <section className={styles.container}>
                <img
                    src={require('../../assets/icons/heart.svg').default}
                    className={styles.icon} />

                <div className={styles.counter}>2</div>
                <Link to="/cart">
                    <img
                        src={require('../../assets/icons/cart.svg').default}
                        className={styles.icon} />
                </Link>
                <div className={styles.counter}>{amount}</div>
            </section>
        </header>
    )
}