// components/Preview.tsx
import React from "react";

interface PreviewProps {
  form1Data: { name: string; mobile: string; email: string };
  form2List: { title: string; description: string }[];
}

const Preview: React.FC<PreviewProps> = ({ form1Data, form2List }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold mb-2">Form 1 Data</h2>
        <p>
          <strong>Name:</strong> {form1Data.name}
        </p>
        <p>
          <strong>Mobile:</strong> {form1Data.mobile}
        </p>
        <p>
          <strong>Email:</strong> {form1Data.email}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-2">Form 2 Data</h2>
        {form2List.length === 0 ? (
          <p>No items added.</p>
        ) : (
          form2List.map((item, idx) => (
            <div key={idx} className="p-2 border bg-green-500 rounded mb-2">
              <p>
                <strong>Title:</strong> {item.title}
              </p>
              <p>
                <strong>Description:</strong> {item.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Preview;
