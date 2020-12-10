import * as yup from 'yup';

const validation = yup.object().shape({
	name: yup.string().min(3, `En az 3 karakter girilmelidir`).required()
});

export default validation;