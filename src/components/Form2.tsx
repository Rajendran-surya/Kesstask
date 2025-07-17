// components/Form2.tsx
import React, { useState } from "react";

interface Form2Props {
  form2List: { title: string; description: string }[];
  setForm2List: React.Dispatch<React.SetStateAction<any[]>>;
}

const Form2: React.FC<Form2Props> = ({ form2List, setForm2List }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title && description) {
      setForm2List([...form2List, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        Add
      </button>

      <div className="mt-4 space-y-2">
        {form2List.map((item, index) => (
          <div
            key={index}
            className="p-2 border bg-green-500 text-white rounded"
          >
            <p>
              <strong>Title:</strong> {item.title}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form2;
