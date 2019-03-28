import * as yup from "yup";

const schema = yup.object({
    email: yup.string()
        .required('Veuillez saisir votre e-mail')
        .email('Votre e-mail n\'est pas valide')
    ,
    password: yup.string().required('Veuillez saisir votre mot de passe'),
});

export default schema