import * as React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store'
import Item from '../item/item';
import styles from './showcase.module.css';

export default function Showcase() {
    const { headphones } = useSelector((state: TRootState) => state.mainStore);

    return (
        <main>
            <section className={styles.box}>
                <h2>Наушники</h2>
                <div className={styles.itemBox}>
                    {headphones.filter(item => !item.wireless).map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            </section>
            <section className={styles.box}>
                <h2>Беспроводные наушники</h2>
                <div className={styles.itemBox}>
                    {headphones.filter(item => item.wireless).map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </main>
    )
}