export interface  Transaction {
    id: number;
    description: string;
    amount: number;
    category: string;
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
