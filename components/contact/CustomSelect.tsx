import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  className,
}) => {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    setSearchValue(searchInput);
    if (searchInput) {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setFilteredOptions(options);
    }
  };

  const handleOptionClick = (option: Option) => {
    setSelectedValue(option.label);
    setSearchValue("");
    setShowDropdown(false);
  };

  return (
    <div className={className}>
      <input
        type="text"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
        value={searchValue || selectedValue}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
      />
      {showDropdown && (
        <div className="absolute mt-1 w-full rounded-md border border-input bg-background shadow-lg z-10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 cursor-pointer hover:bg-hover"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-muted-foreground">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
