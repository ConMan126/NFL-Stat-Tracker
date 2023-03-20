class UI {
    constructor() {
        this.city = document.getElementById('stats-city');
        this.team = document.getElementById('stats-team');
        this.logo = document.getElementById('stats-logo');
        this.receptions = document.getElementById('stats-receptions');
        this.receptionTouchdowns = document.getElementById('stats-receiving-touchdowns');
        this.rushingYards = document.getElementById('stats-rushing-yards');
        this.rushingTouchdowns = document.getElementById('stats-rushing-touchdowns');
        this.passing = document.getElementById('stats-passing-yards');
    }

    paintReceivingStats(stats) {
        stats._embedded.teamReceivingStatsList.forEach(function(team) {
            const thisTeam = document.getElementById('stats-team');
            if(team.name.toLowerCase() === thisTeam.textContent.toLowerCase()) {
                document.getElementById('stats-receptions').textContent = `Total Receptions: ${team.receives}`;
                document.getElementById('stats-receiving-touchdowns').textContent = `Total Receiving Touchdowns: ${team.touchdowns}`;
            }
        })
    }

    paintRushingStats(stats) {
        stats._embedded.teamRushingStatsList.forEach(function(team) {
            const thisTeam = document.getElementById('stats-team');
            if(team.name.toLowerCase() === thisTeam.textContent.toLowerCase()) {
                document.getElementById('stats-rushing-yards').textContent = `Rushing Yards: ${team.yards}`;
                document.getElementById('stats-rushing-touchdowns').textContent = `Total Rushing Touchdouwns: ${team.touchdowns}`;
            }
        })
    }

    paintPassingStats(stats) {
        stats._embedded.teamPassingStatsList.forEach(function(team) {
            const thisTeam = document.getElementById('stats-team');
            if(team.name.toLowerCase() === thisTeam.textContent.toLowerCase()) {
                document.getElementById('stats-passing-yards').textContent = `Passing Yards: ${team.passYards}`;
            }
        })
    }

    showAlert(message, className) {
        // Create div element
        const div = document.createElement('div');
        // Create Class
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Select parent
        const card = document.querySelector('.card')
        // Select main header
        const header = document.getElementById('stats-header');
        // Insert div
        card.insertBefore(div, header);

        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 3000)
    }
}