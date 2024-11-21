import * as yup from "yup";

const ContactUsScheme = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        enterprise: yup.string().required(),
        phone: yup.number().required(),
        message: yup.string(),
    })
    .required();

export default ContactUsScheme;