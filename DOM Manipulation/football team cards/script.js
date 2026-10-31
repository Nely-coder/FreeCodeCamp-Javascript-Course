const footballTeam = {
  team: "Black Stars",
  year: 1980,
  headCoach: "Akwesi",
  players: [
    {
      name: "Abedi Pele",
      position: "forward",
      isCaptain: true,
    },
    { name: "Sule Muntari", position: "defender", isCaptain: false },
    { name: "Michael Essien", position: "midfielder", isCaptain: false },
    { name: "Kingston", position: "goalkeeper", isCaptain: false },
  ],
};

const teamSpan = document.getElementById("team");
const teamYear = document.getElementById("year");
const teamCoach = document.getElementById("head-coach");

teamSpan.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;
teamCoach.textContent = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");

playerCards.innerHTML = footballTeam.players
  .map(
    (player) =>
      `<div class="player-card">
  <h2>${player.name} ${player.isCaptain ? "(Captain)" : ""}</h2>
  <p>Position: ${player.position} </p>
  </div>`,
  )
  .join("");

const select = document.getElementById("players");

select.addEventListener(
  "change",
  () => (playerCards.innerHTML = filterPlayers(select.value)),
);

function filterPlayers(position) {
  const players =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => player.position === position);
  return players
    .map(
      (player) =>
        `<div class="player-card">
  <h2>${player.name} ${player.isCaptain ? "(Captain)" : ""}</h2>
  <p>Position: ${player.position} </p>
  </div>`,
    )
    .join("");
}
