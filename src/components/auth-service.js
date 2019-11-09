import axios from "axios";

class AuthService {
	constructor() {
		let service = axios.create({
			baseURL: "http://localhost:3000",
			withCredentials: true
		});
		this.service = service;
	}
	logout = () => {
		return this.service.post("/logout", {}).then(response => response.data);
	};
}

export default AuthService;
