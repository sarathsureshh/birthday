import React from "react";

interface NoteWidgetProps {
  heading: string;
  body: string;
}

const NoteWidget: React.FC<NoteWidgetProps> = ({ heading, body }) => {
  return (
    <>
      <div className="bg-white-100 p-5 rounded-lg shadow-md max-w-md m-2 border-black">
        <h2 className="text-lg font-semibold mb-2">{heading}</h2>
        <p className="text-gray-700">{body}</p>
        <p className="text-gray-700">Test Text</p>
      </div>
    </>
  );
};

export default NoteWidget;
