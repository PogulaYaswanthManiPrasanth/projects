function calculateCashback(transactionAmount, cashbackOffer, frequency) {
  if (cashbackOffer.type === "general") {
    return ((transactionAmount * cashbackOffer.percentage) / 100) * frequency;
  } else if (cashbackOffer.type === "random") {
    return (
      (Math.random() * (cashbackOffer.maxAmount - cashbackOffer.minAmount) +
        cashbackOffer.minAmount) *
      frequency
    );
  } else if (cashbackOffer.type === "transaction") {
    if (transactionAmount >= cashbackOffer.minimumTransactionValue) {
      return cashbackOffer.cashbackAmount * frequency;
    }
    return 0;
  } else {
    throw new Error("Invalid cashback offer type");
  }
}

// Example parameters
const transaction = 200;
const frequencyWeekly = 4; // Weekly frequency
const frequencyDaily = 30; // Daily frequency
const frequencyMonthly = 1; // Monthly frequency

// Example cashback offers
const generalCashbackOffer = { type: "general", percentage: 20 };
const randomCashbackOffer = { type: "random", minAmount: 2, maxAmount: 10 };
const transactionCashbackOffer = {
  type: "transaction",
  minimumTransactionValue: 100,
  cashbackAmount: 5,
};

const generalCashbackWeekly = calculateCashback(
  transaction,
  generalCashbackOffer,
  frequencyWeekly
);
console.log(`Weekly General Cashback Amount: Rs. ${generalCashbackWeekly}`);

const randomCashbackDaily = calculateCashback(
  transaction,
  randomCashbackOffer,
  frequencyDaily
);
console.log(`Daily Random Cashback Amount: Rs. ${randomCashbackDaily}`);

const transactionCashbackMonthly = calculateCashback(
  transaction,
  transactionCashbackOffer,
  frequencyMonthly
);
console.log(
  `Monthly Transaction-based Cashback Amount: Rs. ${transactionCashbackMonthly}`
);
