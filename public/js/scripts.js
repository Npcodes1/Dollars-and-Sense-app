// alert("This is working!");

// To add current year to copyright.
let currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerHTML = `Copyright &copy; Nicole Payne ${currentYear}. All Rights Reserved.`;

//Pie Chart using chart.js
const pieChart = document.querySelector("#pieChart");

new Chart(pieChart, {
  type: "pie",
  data: {
    labels: [
      "81% Caucasian",
      "7% Hispanic/Latinx",
      "7% Black/African American",
      "6% Asian/Pacific Islander",
      "6% Other",
    ],
    datasets: [
      {
        label: "Demographic percentages for first-time home buyers",
        backgroundColor: [
          "#e67e22",
          "#f1c40f",
          "#399B53",
          "#023B58",
          "#482728",
        ],
        data: [81, 7, 7, 6, 6],
      },
    ],
  },
});

//Quiz

const inputAnswers = document.querySelectorAll(".answer");
//selects all 6 radio inputs
// console.log(inputAnswer, inputAnswer.length);

//To keep score
let score = 0;

//To score each answer. Yes => +1 and No => +0
const calculateAnswers = function () {
  //reset score for each input selected so it's not adding on to the previous one.
  score = 0;
  //for loop to score input that user selects based on if it's yes or no
  for (let i = 0; i < inputAnswers.length; i++) {
    if (inputAnswers[i].checked && inputAnswers[i].value === "yes") {
      console.log(inputAnswers[i].value);
      score += 1;
    } else if (inputAnswers[i].checked && inputAnswers[i].value === "no") {
      console.log(inputAnswers[i].value);
      score;
    }
  }
  console.log(`The final score is ${score}.`);
};

//for each loop to add event listener to selected input choice
inputAnswers.forEach((inputAnswers) => {
  inputAnswers.addEventListener("click", calculateAnswers);
});

//Submit Button
const submitBtn = document.querySelector(".btn");
let message = document.querySelector("#quiz-results");

const getFinalResult = function () {
  if (score >= 2) {
    message.textContent = "This is exactly where you need to be! Welcome!";
  } else if (0 <= score < 2) {
    message.textContent =
      "Sorry, this website will not benefit you. But feel free to look around anyways!";
  } else {
    console.warn("Quiz is not working!");
  }
};

submitBtn.addEventListener("click", getFinalResult);

//Clear Button
const clearBtn = document.querySelector(".clear-btn");

const resetBtn = function () {
  score = 0;
  console.log("The score has been reset.");
  document.querySelector(".form").reset(); //to clear form
  document.querySelector("#quiz-results").textContent = ""; //clear decision from page
};

clearBtn.addEventListener("click", resetBtn);

//Financial Tracker
let expenses = [];
let totalAmount = 0;

//Selecting transaction
const selectedCategory = document.querySelector("#selected-category");

const dateInput = document.querySelector("#date-input");

const amountInput = document.querySelector("#amount-input");

const noteInput = document.querySelector("#note-input");

//To click the button
const addTransaction = document.querySelector("#add-transaction");

//Selecting the table
const expenseTableBody = document.querySelector(".expense-table-body");

//Selecting the total
const totalAmountCell = document.querySelector("#total-amount");

const addExpense = () => {
  const category = selectedCategory.value;
  const date = dateInput.value;
  const amount = Number(amountInput.value);
  const note = noteInput.value;

  expenses.push({ category, date, amount, note });

  totalAmount += amount;
  totalAmountCell.innerHTML = totalAmount;

  const newRow = expenseTableBody.insertRow();

  //create new cells
  const categoryCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  //delete cells
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  const deleteRow = () => {
    expenses.splice(expenses.indexOf(expense));
    totalAmount -= expense.amount;
    totalAmountCell.innerHTML = totalAmount;
    expenseTableBody.removeChild(newRow);
  };
  deleteBtn.addEventListener("click", deleteRow);
};

addTransaction.addEventListener("click", addExpense);

const expense = expenses[expenses.length - 1];
categoryCell.innerHTML = expense.category;
dateCell.innerHTML = expense.date;
amountCell.innerHTML = expense.amount;
deleteCell.appendChild(deleteBtn);

//For loop to Update expenses
for (const expense of expenses) {
  //To display total amount
  totalAmount += expense.amount;
  totalAmountCell.innerHTML = totalAmount;

  //create a new row
  const newRow = expenseTableBody.insertRow();

  //create a new cell for category, date, amount, edit, and delete
  const categoryCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const editCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  //to delete
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";

  //delete row and subtracting amount from total
  const deleteRow = () => {
    expenses.splice(expenses.indexOf(expense));
    totalAmount -= expense.amount;
    totalAmountCell.innerHTML = totalAmount;
    expenseTableBody.removeChild(newRow);
  };

  //activate deleteRow when the delete button is clicked
  deleteBtn.addEventListener("click", deleteRow);

  //taking the expenses and subtracting 1
  const expense = expenses[expenses.length - 1];
  categoryCell.innerHTML = expense.category;
  dateCell.innerHTML = expense.date;
  amountCell.innerHTML = expense.amount;
  deleteCell.appendChild(deleteBtn);
}
