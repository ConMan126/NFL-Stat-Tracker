class Stats {
    constructor(team) {
        this.XRapidAPIKey = '15be8b3d2emshf87344a81b6dd5bp14be87jsncfc80aa92b91';
        this.XRapidAPIHost = 'nfl-team-stats.p.rapidapi.com';
        this.team = team;
    }
    // Fetch Receiving Stats
    async getReceivingStats() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '15be8b3d2emshf87344a81b6dd5bp14be87jsncfc80aa92b91',
                'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
            }
        };
        
        const receivingResponse = await fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/receiving-stats/offense/2022', options);
        const receivingResponseData = await receivingResponse.json();
        
        return receivingResponseData;
    }
    
    // Fetch rushing Stats
    async getRushingStats() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '15be8b3d2emshf87344a81b6dd5bp14be87jsncfc80aa92b91',
                'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
            }
        };
        
        const rushingResponse = await fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/offense/2022', options);
        const rushingResponseData = await rushingResponse.json();
        
        return rushingResponseData;
    }
    // Fetch passing Stats
    async getPassingStats() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '15be8b3d2emshf87344a81b6dd5bp14be87jsncfc80aa92b91',
                'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
            }
        };
        
        const passingResponse = await fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/2022', options);
        const passingResponseData = await passingResponse.json();
        
        return passingResponseData;
    }

    // Change Teams
    changeTeams(team) {
        this.team = team;
    }
}





