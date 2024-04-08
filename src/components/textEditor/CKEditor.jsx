// This sample assumes that the application is using a CKEditor 5 editor built from source.
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";

import "./styles.css";

const TextEditor = ({ setFieldValue, name, onChange, value }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        name={name}
        className="ck-editor-main-container"
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFieldValue(name, data);
        }}
      />
    </>
  );
};

export default TextEditor;
