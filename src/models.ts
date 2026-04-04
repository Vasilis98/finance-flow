export type TransactionCategory =
    'Food' |
    'Income' |
    'Entertainment' |
    'Utilities' |
    'Transport';

export interface Transaction {
    id: number;
    description: string;
    amount: number;
    category: TransactionCategory;
    date: string;
    isIncome: boolean;
}

export interface Category {
    id: number;
    name: string;
    color: string;
    icon: string;
}

export interface Budget {
    categoryId: number;
    limit: number;
    spent: number;
}

// Utility Types
export type NewTransaction = Omit<Transaction, 'id'>;
export type UpdateTransaction = Partial<Transaction>;
export type TransactionSummary = Pick<Transaction, 'description' | 'amount' | 'isIncome'>;
export type UpdateBudget = Pick<Budget, 'limit'>;
