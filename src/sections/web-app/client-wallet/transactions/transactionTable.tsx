const { ethers } = require('ethers');

// Provider connection (replace with your Ethereum node URL)
const provider = new ethers.providers.JsonRpcProvider('https://your-ethereum-node-url');

// ABI (Application Binary Interface) of the RealEstateSPV contract
const contractABI = [
  // ABI definition goes here
];

// Contract address of the RealEstateSPV contract
const contractAddress = '0x063609Ae3a31f399c2Ff82208BE88f4834b7dA29';

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Function to create the investment table
function createInvestmentTable(events) {
  // Create a table element
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');

  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['Time', 'Status', 'Date', 'Wallet', 'Amount'].forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  events.forEach((event) => {
    const row = document.createElement('tr');

    // Time
    const timeCell = document.createElement('td');
    timeCell.textContent = new Date(event.args.time.toNumber() * 1000).toLocaleString();
    row.appendChild(timeCell);

    // Status
    const statusCell = document.createElement('td');
    statusCell.textContent = 'Investment Made';
    row.appendChild(statusCell);

    // Date
    const dateCell = document.createElement('td');
    dateCell.textContent = new Date(event.args.time.toNumber() * 1000).toLocaleDateString();
    row.appendChild(dateCell);

    // Wallet
    const walletCell = document.createElement('td');
    walletCell.textContent = event.args.investor;
    row.appendChild(walletCell);

    // Amount
    const amountCell = document.createElement('td');
    amountCell.textContent = ethers.utils.formatEther(event.args.amount);
    row.appendChild(amountCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}

// Listen for the InvestmentMade event
async function listenToInvestmentEvents() {
  try {
    // Filter for InvestmentMade events
    const filter = contract.filters.InvestmentMade();

    // Set up event listener
    contract.on(filter, (investor, amount, time, event) => {
      console.log('Investment Made:', { investor, amount, time });

      // Create the investment table
      const investmentTable = createInvestmentTable([event]);

      // Append the table to the DOM
      document.body.appendChild(investmentTable);
    });
  } catch (error) {
    console.error('Error setting up event listener:', error);
  }
}

// Start listening to events
listenToInvestmentEvents();

// Optional: Clean up event listener when no longer needed
function stopListening() {
  contract.removeAllListeners('InvestmentMade');
}
