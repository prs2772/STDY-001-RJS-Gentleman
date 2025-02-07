// Memoriza (caché) el resultado de ejecutar una función COSTOSA para evitar que se vuelva a llamar
// Controlar si el beneficio de memorizar es superior al de recalcular

import { useMemo, useState } from "react";
import { IItem } from "./usememo.item"
import { itemsTest } from "./usememo.test.values";

export const UseMemo = () => {
    const [items, setItems] = useState<Array<IItem>>(itemsTest);
    const [discount, setDiscount] = useState<number>(0);
    const totalCost = useMemo(() => items.reduce((total, item) => total + item.price, 0), [items]);
    const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);
    const addItem = () => {
        const newItem: IItem = {
            id: items.length + 1,
            name: `Producto ${items.length + 1}`,
            price: Math.random() * 100
        };

        setItems([...items, newItem]);
    }

    return (
        <div>
            <h2>Use memo shopping cart example</h2>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} - ${item.price.toLocaleString('en-US', { style: "currency", currency: 'MXN' })}
                        </li>
                    )
                })}
            </ul>
            <p>Subtotal: {totalCost.toLocaleString('en-US', { style: "currency", currency: 'MXN' })}</p>
            <input type="number" value={discount} onChange={(e) => setDiscount(parseInt(e.target.value))} />
            <p>Discount: {discount.toLocaleString('en-US', { style: "currency", currency: 'MXN' })}</p>
            <p>Total: {finalCost.toLocaleString('en-US', { style: "currency", currency: 'MXN' })}</p>
            <button onClick={addItem}>Add random item</button>
        </div>
    )
}
