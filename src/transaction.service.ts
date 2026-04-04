import { Transaction, NewTransaction, TransactionCategory } from './models';
import { TRANSACTIONS } from './data';

export class TransactionService {

    private transactions: Transaction[] = TRANSACTIONS;
    private nextId: number = TRANSACTIONS.length + 1;

    // Επιστροφή όλων των transactions
    getAll(): Transaction[] {
        return this.transactions;
    }

    // Εύρεση transaction βάσει id
    getById(id: number): Transaction | undefined {
        return this.transactions.find(t => t.id === id);
    }

    // Προσθήκη νέου transaction
    add(transaction: NewTransaction): Transaction {
        const newTransaction: Transaction = {
            ...transaction,
            id: this.nextId++
        };
        this.transactions.push(newTransaction);
        return newTransaction;
    }

    // Διαγραφή transaction
    delete(id: number): boolean {
        const index = this.transactions.findIndex(t => t.id === id);
        if (index === -1) return false;
        this.transactions.splice(index, 1);
        return true;
    }

    // Υπολογισμός συνολικών εσόδων
    getTotalIncome(): number {
        return this.transactions
            .filter(t => t.isIncome)
            .reduce((total, t) => total + t.amount, 0);
    }

    // Υπολογισμός συνολικών εξόδων
    getTotalExpenses(): number {
        return this.transactions
            .filter(t => !t.isIncome)
            .reduce((total, t) => total + t.amount, 0);
    }

    // Φιλτράρισμα ανά κατηγορία
    getByCategory(category: TransactionCategory): Transaction[] {
        return this.transactions.filter(t => t.category === category);
    }
}
