import * as React from 'react';
import { useDispatch } from 'react-redux';
import { TItem, deleteItem, increaseNumber, decreaseNumber } from '../../services/main-store';
import styles from './cart-item.module.css';

export default function CartItem(props: { item: TItem }) {
    const dispatch = useDispatch();
    const image = require(`../../assets/data/pictures/${props.item.img}`).default;

    const increment = (item: TItem) => {
        dispatch(increaseNumber(item));
    }

    const decrement = (item: TItem) => {
        dispatch(decreaseNumber(item));
    }

    const removeItem = (item: TItem) => {
        dispatch(deleteItem(item));
    }

    React.useEffect(() => {
        if (props.item.number === 0) {
            dispatch(deleteItem(props.item));
        }
    }, [decrement])

    return (
        <div className={styles.card}>
            <section className={styles.first}>
                <img src={image} className={styles.img} />
                <div className={styles.changingBox}>
                    <div className={styles.change} onClick={() => decrement(props.item)}>-</div>
                    <p>{props.item.number}</p>
                    <div className={styles.change} onClick={() => increment(props.item)}>+</div>
                </div>
            </section>
            <section className={styles.second}>
                <p className={styles.title}>{props.item.title}</p>
                <p className={styles.price}>{props.item.price} ₽</p>
            </section>
            <section className={styles.third}>
                <img src={require('../../assets/icons/trashbin.svg').default}
                    className={styles.trashbin} onClick={() => removeItem(props.item)} />
                <p className={styles.sum}>{props.item.price * props.item.number} ₽</p>
            </section>
        </div>
    )
}