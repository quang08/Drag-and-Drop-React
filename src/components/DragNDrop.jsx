import React, { useState } from "react";

function DragNDrop() {
  const [widgets, setWidgets] = useState([]);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType); // set the widget type
  };

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType"); // get the widget type
    // check if the widget is already in the widgets array
    if (widgets.includes(widgetType)) {
      return;
    }
    setWidgets([...widgets, widgetType]); // add the widget to the widgets array
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const deleteWidget = (widget) => {
    const newWidgets = widgets.filter(w => w !== widget); // filter out the widget to delete
    setWidgets(newWidgets);
  }


  return (
    <div className="grid grid-cols-3 text-center p-2 gap-4 h-full">
      <div className="col-span-1 border-dashed border-4 border-sky-500 p-2">
        <div
          className="bg-slate-800 p-2 mb-2"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget 1")}
        >
          Widget 1
        </div>

        <div
          className="bg-slate-800 p-2 mb-2"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget 2")}
        >
          Widget 2
        </div>

        <div
          className="bg-slate-800 p-2 mb-2"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget 3")}
        >
          Widget 3
        </div>

        <div
          className="bg-slate-800 p-2 mb-2"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget 4")}
        >
          Widget 4
        </div>
      </div>

      <div className="col-span-2 border-dashed border-4 border-sky-500 p-3" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map(widget => (
            <div className="bg-slate-800 p-2 mb-2" key={widget}>
                {widget}
                <button className="bg-red-500 p-1 ml-2 rounded-full" onClick={() => deleteWidget(widget)}>X</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default DragNDrop;
