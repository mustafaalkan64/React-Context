import React, { useState, useContext } from "react";
import {Button, Form} from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";
import validation from "../validation"
import { useFormik } from "formik";
import UserContext from "../contexts/UserContext";
import styles from "../style.module.css";

function NewUserForm() {
	const { users, setUsers } = useContext(UserContext);

	const formik = useFormik({
		initialValues: {
			name: ""
		},
		onSubmit: async (values, bag) => {
			console.log(bag);
			setUsers([...users, { id: uuidv4(), name: values.name }]);
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
							placeholder="Yeni Kullanıcı" />
				</Form.Group>
				{errors.name && touched.name && (
						<div className={styles.error}>{errors.name}</div>
					)}
				<Button variant="primary"value="add user" type="submit">
					Yeni Kullanıcı
				</Button>
			</Form>
		</div>
	);
}

export default NewUserForm;
