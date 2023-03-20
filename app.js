const specificTeam = document.getElementById('stats-team').textContent;

// Init stats
const stats = new Stats(specificTeam);

// Init UI
const ui = new UI();

// DomContentLoaded
document.addEventListener('DOMContentLoaded', getReceivingStats);
document.addEventListener('DOMContentLoaded', getPassingStats);
document.addEventListener('DOMContentLoaded', getRushingStats);

// Change Team
document.getElementById('change-team-btn').addEventListener('click', e => {
    const team = document.getElementById('team').value;
    document.getElementById('stats-team').textContent = team;
 

    if (team.toLowerCase() === 'Cardinals'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Arizona';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Falcons'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Atlanta';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Ravens'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Baltimore';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Bills'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Buffalo';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Panthers'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Carolina';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Bears'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Chicago';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Bengals'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Cincinnati';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Browns'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Cleveland';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Cowboys'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Dallas';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Broncos'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Denver';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Lions'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Detroit';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Packers'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Green Bay';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Texans'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Houston';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Colts'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Indianapolis';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Jaguars'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Jacksonville';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Chiefs'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Kansas City';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Raiders'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Las Vegas';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Chargers'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Los Angeles';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Rams'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Los Angeles';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Dolphins'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Miami';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Vikings'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Minnesota';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Patriots'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'New England';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Saints'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'New Orleans';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Giants'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'New York';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Jets'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'New York';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Eagles'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Philadelphia';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Steels'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Pittsburgh';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === '49ers'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'San Francisco';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Seahawks'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Seattle';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Buccaneers'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Tampa Bay';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Titans'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Tennessee';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else if (team.toLowerCase() === 'Commanders'.toLowerCase()) {
        document.getElementById('stats-city').textContent = 'Washington';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/${team}.png`);
    } else {
        document.getElementById('stats-city').textContent = 'Cincinnati';
        document.getElementById('stats-team').textContent = 'Bengals';
        document.getElementById('stats-logo').setAttribute('src', `dist/img/bengals.png`);
        insertAlert();
    }


    // Change Location
    stats.changeTeams(team);

    // Show results
    getPassingStats();
    getReceivingStats();
    getRushingStats();

    document.getElementById('team').value = '';
;})

// Get stats data and paint to UI
function getReceivingStats () {
    stats.getReceivingStats()
        .then(receivingData => {
            ui.paintReceivingStats(receivingData);
            console.log(receivingData);
        })
        .catch(err => console.log(err));
}

// Get stats data and paint to UI
function getRushingStats () {
    stats.getRushingStats()
        .then(rushingData => {
            ui.paintRushingStats(rushingData);
            console.log(rushingData);
        })
        .catch(err => console.log(err));
}

// Get stats data and paint to UI
function getPassingStats () {
    stats.getPassingStats()
        .then(passingData => {
            ui.paintPassingStats(passingData);
            console.log(passingData);
        })
        .catch(err => console.log(err));
}

function insertAlert() {
    ui.showAlert('Please Enter Valid Team Name', 'alert');
}

















