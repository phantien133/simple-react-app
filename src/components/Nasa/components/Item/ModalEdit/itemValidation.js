import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .max(255, 'Title too long'),
  description: Yup.string()
    .required('Description is required')
    .max(3000, 'Description too long'),
});
