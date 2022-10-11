import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, TItem } from '../../services/main-store';
import styles from './item.module.css';


export default function Item(props: { item: TItem }) {
    const dispatch = useDispatch();
    const image = require(`../../assets/data/pictures/${props.item.img}`).default;

    const addToCart = (item: TItem) => {
        let clone = Object.assign({}, item);
        clone = { ...clone, number: ++clone.number }

        dispatch(addItemToCart(clone));
    };

    return (
        <div className={styles.box}>
            <img src={image} className={styles.img} />
            <div className={styles.inf}>
                <section className={styles.data}>
                    <p className={styles.title}>{props.item.title}</p>
                    <p className={styles.price}>{props.item.price} ₽</p>
                </section>
                <section className={styles.data}>
                    <div className={styles.rate}>
                        <img src={require('../../assets/icons/star.svg').default} className={styles.star} />
                        <p>{props.item.rate}</p>
                    </div>
                    <button
                        className={styles.btn}
                        onClick={() => addToCart(props.item)}
                    >Купить</button>
                </section>
            </div>
        </div>
    )
}