import React from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onFormChange = (expense) => {
        console.log('logging from newexpense');
        console.dir(expense);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onChangeFormHandler={onFormChange} />
        </div>
    );
}

export default NewExpense;