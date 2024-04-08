import { Select } from "windmill-react-ui-kit";
import ParentCategory from "../category/ParentCategory";

const SelectCategory = ({ setCategory }) => {
  return (
    <>
      <Select
        onChange={(e) => setCategory(e.target.value)}
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
      >
        <option value="All" defaultValue hidden>
          यहाँ थिच्नुहोस
        </option>
        <ParentCategory />
      </Select>
    </>
  );
};

export default SelectCategory;
