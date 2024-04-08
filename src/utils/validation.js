export function searchString(keyword, string) {
    if (keyword === "") return true;
    if (!keyword || !string) return false;
  
    // Turn keyword and string into easily searchable strings.
    const trimmedKeyword = keyword.toString().trim().toLowerCase();
    const trimmedString = string.toString().toLowerCase();
    return trimmedString.includes(trimmedKeyword);
  }
  