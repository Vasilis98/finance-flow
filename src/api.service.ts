import { Transaction, NewTransaction } from './models';

export class ApiService {

    private apiUrl: string = 'https://api.financeflow.com';

    // Προσομοίωση network delay
    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // GET — πάρε όλα τα transactions
    async getTransactions(): Promise<Transaction[]> {
        await this.delay(500);
        return [
            {
                id: 1,
                description: 'Supermarket',
                amount: 85,
                category: 'Food',
                date: '2026-03-29',
                isIncome: false
            }
        ];
    }

    // POST — πρόσθεσε νέο transaction
    async createTransaction(transaction: NewTransaction): Promise<Transaction> {
        await this.delay(300);
        return {
            ...transaction,
            id: Math.floor(Math.random() * 1000)
        };
    }

    // DELETE — διέγραψε transaction
    async deleteTransaction(id: number): Promise<boolean> {
        await this.delay(200);
        return true;
    }
}
