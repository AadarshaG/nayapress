import { isArray } from "lodash";
import { useEffect, useRef, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { TableBody, TableCell, TableRow } from "windmill-react-ui-kit";
import Spinner from "../../spinner";

function TBody({
  loaded,
  children,
  noDataTitle = "No data found",
  noDataSubtitle = "Try modifying your search criteria",
  colSpan,
}) {
  const ref = useRef(null);
  const [colspan, setColspan] = useState(1);

  useEffect(() => {
    // Read length of sibling th's as colspan

    if (ref && ref.current && ref.current.previousElementSibling)
      setColspan(
        ref.current.previousElementSibling.children[0].children.length
      );
  }, []);
  if (!loaded)
    return (
      <TableBody ref={ref}>
        <TableRow>
          <TableCell colSpan={colspan}>
            <div className="flex items-center flex-col justify-center">
              <Spinner size="md" />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );

  // If no data
  if (loaded && isArray(children) && children.length === 0) {
    return (
      <TableBody ref={ref}>
        <TableRow>
          <TableCell colSpan={colspan}>
            <div className="flex items-center flex-col justify-center">
              <FaSearchengin className="w-12 h-12 mt-5" />

              <span className="text-gray-500 my-2">{noDataTitle}</span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return <TableBody>{children}</TableBody>;
}
export default TBody;
