import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required('Veuillez saisir votre prénom'),
    lastName: yup.string().required('Veuillez saisir votre nom'),
    email: yup.string()
        .required('Veuillez saisir votre e-mail')
        .email('Adresse e-mail invalide'),
    password: yup.string()
        .required('Veuillez créer votre mot de passe')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .matches(/[a-z]/, 'Le mot de passe doit contenir des lettres minuscules.')
        .matches(/[A-Z]/, 'Le mot de passe doit contenir des lettres majuscules.')
        .matches(/\d/, 'Le mot de passe doit contenir au moins un chiffre.')
        .matches(/\W/, 'Le mot de passe doit contenir au moins un caractère non alpha-numérique.')
    ,
});

export default schema