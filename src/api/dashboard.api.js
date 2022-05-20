import axios from "axios";

const DASHBOARD_URL = 'https://radiant-temple-07706.herokuapp.com/statuses';

class DashboardApi {
    async get() {
        const response = await fetch(DASHBOARD_URL, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
            }
        }).then(data => data.json())

        return response
    }
}

export default new DashboardApi();
