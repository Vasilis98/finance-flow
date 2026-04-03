import { Transaction } from './models';


export function calculateIncome(transactions: Transaction[]): number {
    return transactions
        .filter(t => t.isIncome === true)
        .reduce((total, t) => total + t.amount, 0);
}

export function calculateExpenses(transactions: Transaction[]): number {
    return transactions
        .filter(t => t.isIncome === false)
        .reduce((total, t) => total + t.amount, 0);
}

export function calculateBalance(transactions: Transaction[]): number {
    return calculateIncome(transactions) - calculateExpenses(transactions);
}

export function filterByCategory(
    transactions: Transaction[],
    category: string
): Transaction[] {
    return transactions.filter(t => t.category === category);
}

