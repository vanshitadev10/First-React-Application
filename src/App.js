import React, { useState } from "react";

import Form from "./Components/User/Form";
import UserInformation from "./Components/User/UserInformation";

const App = () => {

  const [data, setData] = useState([]);

  const onEnteringData = (dataEntered) => {
    setData((prevData) => {
      return [dataEntered, ...prevData];
    });
  };

  const updatedData = (dataDeleted) => {
    setData((prevData) => {
      const updated = prevData.filter((data) => data.id !== dataDeleted);
      console.log(updated)
      return updated;
    });
  }


  return (
    <div>
      <Form onAdding={onEnteringData} />
      <UserInformation items={data} onDeleting={updatedData} />
    </div>
  );
};

export default App;