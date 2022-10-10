import * as React from 'react';
import { TItem } from '../../services/main-store';
import styles from './cart-item.module.css';

export default function CartItem(props: { item: TItem }) {

    return (
        <div className={styles.card}>
            <section className={styles.first}>
                <img />
                <div className={styles.changingBox}>
                    <div className={styles.change}>-</div>
                    <p>{props.item.number}</p>
                    <div className={styles.change}>+</div>
                </div>
            </section>
            <section className={styles.second}>
                <p className={styles.title}>{props.item.title}</p>
                <p className={styles.price}>{props.item.price} ₽</p>
            </section>
            <section className={styles.third}>
                <img src={require('../../assets/icons/trashbin.svg').default}
                    className={styles.trashbin} />
                <p className={styles.sum}>{props.item.price * props.item.number} ₽</p>
            </section>
        </div>
    )
}