// components/Form1.tsx
import React from "react";

interface Form1Props {
  formData: {
    name: string;
    mobile: string;
    email: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Form1: React.FC<Form1Props> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev: any) => ({ ...prev, name: e.target.value }))
        }
      />

      <input
        className="border p-2 w-full"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={(e) =>
          setFormData((prev: any) => ({ ...prev, mobile: e.target.value }))
        }
      />

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev: any) => ({ ...prev, email: e.target.value }))
        }
      />
    </div>
  );
};

export default Form1;
