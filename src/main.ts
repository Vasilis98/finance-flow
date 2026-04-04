import { TransactionService } from './transaction.service';

const service = new TransactionService();


console.log("All transactions:", service.getAll());


console.log("Total Income:", service.getTotalIncome());


console.log("Total Expenses:", service.getTotalExpenses());


const newTransaction = service.add({
    description: "Bus ticket",
    amount: 2.50,
    category: "Transport",
    date: "2026-04-01",
    isIncome: false
});
console.log("Added transaction:", newTransaction);


console.log("Get by id 1:", service.getById(1));


console.log("Delete id 1:", service.delete(1));
console.log("After delete:", service.getAll());
