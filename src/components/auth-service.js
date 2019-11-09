import axios from "axios";

class AuthService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}`,
			withCredentials: true
		});
		this.service = service;
	}
	logout = () => {
		return this.service.delete("/logout", {}).then(response => response.data);
	};
}

export default AuthService;
