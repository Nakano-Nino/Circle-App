import { useState, ChangeEvent } from "react";
import { UserRegisterType } from "@/types/UserType";
import { API } from "@/config/api";
import { useNavigate } from "react-router-dom";

export function FormRegisterHook() {
	const navigate = useNavigate();
	const [form, setForm] = useState<UserRegisterType>({
		full_name: "",
		username: "",
		email: "",
		password: "",
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	async function handleRegister() {
		try {
			const response = await API.post("/user/register", form);
			navigate("/login");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return { form, handleChange, handleRegister };
}
