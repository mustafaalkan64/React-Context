import React, { useContext } from "react";
import {Button, Form} from 'react-bootstrap';
import validation from "../validation"
import { useFormik } from "formik";
import UserContext from "../contexts/UserContext";
import styles from "../style.module.css";

function NewUserForm() {
	const { users, setUsers } = useContext(UserContext);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: ""
		},
		onSubmit: async (values, bag) => {
			console.log(bag);
			setUsers([...users, { id: users[users.length - 1].id + 1, name: values.name, email: values.email }]);
			bag.resetForm();
		},
		validationSchema: validation,
	});

	const {
		values,
		errors,
		handleChange,
		handleBlur,
		isSubmitting,
		touched,
	} = formik;

	return (
		<div>

			<Form onSubmit={formik.handleSubmit}>
				<Form.Group controlId="name">
					<Form.Control type="text" 
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							disabled={isSubmitting}
							placeholder="Kullanıcı Adı" />
					{errors.name && touched.name && (
						<Form.Text className={styles.error}>
						{errors.name}
						</Form.Text>
					)}
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Control type="text" 
						name="email" 
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						disabled={isSubmitting}
						placeholder="Email" />
					{errors.email && touched.email && (
						<Form.Text className={styles.error}>
						{errors.email}
						</Form.Text>
					)}
				</Form.Group>

				<Button variant="primary"value="add user" type="submit">
					Yeni Kullanıcı Ekle
				</Button>
			</Form>
		</div>
	);
}

export default NewUserForm;
