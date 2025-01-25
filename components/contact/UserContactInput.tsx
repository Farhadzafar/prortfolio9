import React, { useState } from "react";

interface UserContactInputProps {
  className?: string;
}

const UserContactInput: React.FC<UserContactInputProps> = ({ className }) => {
  const [inputType, setInputType] = useState("phone");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(e.target.value);
  };

  return (
    <div className={`${className} flex gap-3 w-full`}>
      <select
        onChange={handleSelectChange}
        value={inputType}
        className="w-[30%] mt-1 block rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
      >
        <option value="phone">Phone Number</option>
        <option value="email">Email Address</option>
      </select>
      <input
        type={inputType === "phone" ? "number" : "email"}
        className="flex h-10 w-[70%] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={`Enter ${
          inputType === "phone" ? "phone number" : "email"
        }`}
      />
    </div>
  );
};

export default UserContactInput;
