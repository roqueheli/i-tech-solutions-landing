import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  type: "text" | "password" | "tel" | "number" | "email";
  label?: string;
  fieldName: string;
  placeholder?: string;
  styles?: string;
  requiredField?: boolean | false;
};

const InputField = <T extends FieldValues>({ type, fieldName, label, placeholder, styles, requiredField }: InputFieldProps<T>) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={`flex flex-col ${styles ?? ""}`}>
      <div className="flex items-center">
        <label className="font-medium">{`${label}`}</label>
        {requiredField && <p className="ml-1 text-red-500">*</p>}
      </div>
      <input
        {...register(fieldName)}
        className="p-2 mt-2 rounded bg-gray-50 border border-gray-200"
        type={type}
        placeholder={placeholder}
      />
      {errors?.[fieldName] && (
        <div className="text-red-600 mb-4">Este campo es obligatorio</div>
      )}
    </div>
  );
};

export default InputField;
