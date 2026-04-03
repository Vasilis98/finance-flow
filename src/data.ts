import { Transaction, Category, Budget } from './models';

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Food', color: '#e65100', icon: '🍔' },
    { id: 2, name: 'Income', color: '#2e7d32', icon: '💰' },
    { id: 3, name: 'Entertainment', color: '#6a1b9a', icon: '🎬' },
    { id: 4, name: 'Utilities', color: '#1565c0', icon: '⚡' },
    { id: 5, name: 'Transport', color: '#00838f', icon: '🚗' }
];

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        description: 'Supermarket',
        amount: 85,
        category: 'Food',
        date: '2026-03-29',
        isIncome: false
    },
    {
        id: 2,
        description: 'Monthly Salary',
        amount: 2450,
        category: 'Income',
        date: '2026-03-28',
        isIncome: true
    },
    {
        id: 3,
        description: 'Netflix',
        amount: 13.99,
        category: 'Entertainment',
        date: '2026-03-27',
        isIncome: false
    },
    {
        id: 4,
        description: 'Electric Bill',
        amount: 94.50,
        category: 'Utilities',
        date: '2026-03-26',
        isIncome: false
    }
];

export const BUDGETS: Budget[] = [
    { categoryId: 1, limit: 300, spent: 85 },
    { categoryId: 3, limit: 50, spent: 13.99 },
    { categoryId: 4, limit: 150, spent: 94.50 }
];
