import * as yup from 'yup';

const validation = yup.object().shape({
	email: yup.string().email('Geçerli bir email değil.').required('Email is Required'),
	name: yup.string().min(3, `En az 3 karakter girilmelidir`).required('Name is Required')
});

export default validation;