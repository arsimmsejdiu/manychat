import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="py-6">
      {/* <SearchIcon color="#3352cc" /> */}
      <Input
        placeholder="Search by name, email or status"
        className="border-none outline-none right-0 focus:ring-0 flex-1"
      />
    </div>
  );
};

export default Search;
