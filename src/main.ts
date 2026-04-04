import { ApiService } from './api.service';

async function main() {
    const api = new ApiService();


    try {

        const transactions = await api.getTransactions();
        console.log("Transactions:", transactions);

        const newTransaction = await api.createTransaction({
            description: "Coffee",
            amount: 3.50,
            category: "Food",
            date: "2026-04-01",
            isIncome: false
        });
        console.log("New transaction:", newTransaction);

        const deleted = await api.deleteTransaction(1);
        console.log("Deleted:", deleted);

    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Τελείωσα!");
    }
}

main();
