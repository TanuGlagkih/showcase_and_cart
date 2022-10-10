import * as React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
import CartItem from '../cart-item/cart-item';
import styles from './cart.module.css';

export default function Cart() {
    const { cart, sum } = useSelector((state: TRootState) => state.mainStore);

    return (
        <main className={styles.container}>
            <section className={styles.itemBlock}>
                <h2>Корзина</h2>
                <div className={styles.itemBox}>
                    {cart.map(item => (
                        <CartItem item={item} key={item.id} />
                    ))}
                </div>
            </section>
            <section className={styles.sumBlock}>
                <div className={styles.sumBox}>
                    <p className={styles.sumContent}>ИТОГО</p>
                    <p className={styles.sumContent}>₽ {sum}</p>
                </div>
                <button className={styles.btn}>Перейти к оформлению</button>
            </section>
        </main>
    )
}