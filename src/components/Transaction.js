import React, { useContext } from 'react'

export const Transaction = ({transaction}) => {
    const { deletTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

        return (
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction()} className='delete-btn'>x</button>
            </li>
        )
}
