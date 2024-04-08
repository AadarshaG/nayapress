import * as React from "react";
import { AiFillPrinter } from "react-icons/ai";
import ReactToPrint from "react-to-print";
import { Button } from "windmill-react-ui-kit";
import Loading from "./preloader/Loading";

export const Print = ({ children, data }) => {
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1000);
    });
  }, [setLoading, setText]);

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [text]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, []);

  const reactToPrintTrigger = React.useCallback((loading) => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;
    return (
      <div className="flex justify-end mt-4">
        <Button
          className="w-full sm:w-auto  text-white hover:bg-gray-500 hover:text-white mr-0"
          layout="outline"
          disabled={loading}
        >
          <AiFillPrinter className="mr-2" />
          Print​
        </Button>
      </div>
    );
  }, []);
  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={() => reactToPrintTrigger(loading)}
      />
      {loading && (
        <div className="indicator">
          <Loading loading={true} />
        </div>
      )}

      {children(componentRef)}
    </div>
  );
};
