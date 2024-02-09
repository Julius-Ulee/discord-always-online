const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

// Array of status objects
const statuses = [
    { name: "schoolprograms.my.id | 🍹 Living my Life with peace", type: 0, url: "schoolprograms.my.id" },
    { name: "github.com/Julius-Ulee | 🦖 Asade", type: 0, url: "github.com/Julius-Ulee" }
];

let currentStatusIndex = 0; // Variable to keep track of the current status index

bot.on("error", (err) => {
    console.error(err); // or your preferred logger
});

// Function to update the bot's status
function updateStatus() {
    const status = statuses[currentStatusIndex];
    bot.editStatus("dnd", status);
    currentStatusIndex = (currentStatusIndex + 1) % statuses.length; // Move to the next status in the array
}

// Call updateStatus initially
updateStatus();

// Schedule the update of the bot's status every 30 seconds
setInterval(updateStatus, 30000);

bot.connect(); // Get the bot to connect to Discord
