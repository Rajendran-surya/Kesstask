// pages/index.tsx
"use client";
import { useState } from "react";
import Form1 from "@/components/Form1";
import Form2 from "@/components/Form2";
import Preview from "@/components/Preview";

export default function Home() {
  const [tab, setTab] = useState<"form1" | "form2" | "preview">("form1");
  const [form1Data, setForm1Data] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [form2List, setForm2List] = useState<
    { title: string; description: string }[]
  >([]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            tab === "form1" ? "bg-blue-600 text-white" : "bg-green-500"
          }`}
          onClick={() => setTab("form1")}
        >
          Form 1
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "form2" ? "bg-blue-600 text-white" : "bg-green-500"
          }`}
          onClick={() => setTab("form2")}
        >
          Form 2
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "preview" ? "bg-blue-600 text-white" : "bg-green-500"
          }`}
          onClick={() => setTab("preview")}
        >
          Preview
        </button>
      </div>

      {tab === "form1" && (
        <Form1 formData={form1Data} setFormData={setForm1Data} />
      )}
      {tab === "form2" && (
        <Form2 form2List={form2List} setForm2List={setForm2List} />
      )}
      {tab === "preview" && (
        <Preview form1Data={form1Data} form2List={form2List} />
      )}
    </div>
  );
}
