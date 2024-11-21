import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  label?: string;
  fieldName: keyof T;
  placeholder?: string;
  styles?: string;
};

const TextAreaField = <T extends FieldValues>({
  fieldName,
  label,
  placeholder,
  styles,
}: InputFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`flex flex-col ${styles ?? ""}`}>
      <label>{label}</label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="resize-none mt-2 p-2 w-full mb-4 rounded bg-gray-50 border border-gray-200"
        {...register(fieldName as string, { required: true })}
      />
      {errors?.[fieldName as string] && (
        <div className="text-red-600 mb-4">Este campo es obligatorio</div>
      )}
    </div>
  );
};

export default TextAreaField;
