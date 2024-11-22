"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, Resolver, useForm } from "react-hook-form";
import InputField from "../../Form/InputField";
import SubmitButton from "../../Form/SubmitButton";
import ContactUsScheme from "@/schemes/contact-us.scheme";
import { useState } from "react";
import { WrongDataError } from "@/services/commons/http.errors";
import TextAreaField from "../../Form/TextAreaField";

type ContactUsFormData = {
  name: string;
  email: string;
  enterprise: string;
  phone: number;
  message?: string;
};

const ContactUsForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const methods = useForm<ContactUsFormData>({
    resolver: yupResolver(ContactUsScheme) as Resolver<ContactUsFormData>,
  });

  const { handleSubmit } = methods;

  // data: ContactUsFormData
  const onSubmit = async () => {
    try {
      setServerError(null);
    } catch (error) {
      if (error instanceof WrongDataError) {
        setServerError("Algunos de los datos no son correctos.");
      } else {
        setServerError("Formulario no disponible");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="text"
          fieldName="name"
          label="Nombre completo"
          placeholder="Pedro Pérez"
          requiredField={true}
        />
        <InputField
          type="email"
          fieldName="email"
          label="Correo electrónico"
          styles={"mt-4"}
          placeholder="contact-us@itech.com"
          requiredField={true}
        />
        <InputField
          type="text"
          fieldName="enterprise"
          label="Nombre de la empresa"
          styles={"mt-4"}
          placeholder="iTech Solutions"
          requiredField={true}
        />
        <InputField
          type="tel"
          fieldName="phone"
          label="Número de teléfono"
          styles={"mt-4"}
          placeholder="+56 9 1234 4321"
          requiredField={true}
        />
        <TextAreaField
          fieldName="message"
          label="Mensaje"
          styles={"mt-4"}
        />
        <SubmitButton label={"Enviar"} onSubmit={onSubmit} styles={"mt-2"} />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  );
};

export default ContactUsForm;
