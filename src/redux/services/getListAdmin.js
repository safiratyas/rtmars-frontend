import axios from 'axios';

export default function getCitizen() {
	return axios

		.get("http://localhost:3000/api/admins")
}