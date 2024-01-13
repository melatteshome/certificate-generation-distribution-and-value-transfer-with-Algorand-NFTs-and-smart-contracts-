import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import RequestedTable from "../tables/tables_requested";
import IssuedTable from "../tables/table_issued";

const TabOneContent = () => {
  return (
    <div>
      <h3>'</h3>
	  <RequestedTable/>

    </div>
  );
};

const TabTwoContent = () => {
  return (
    <div>
      <h3>Tab Two Content</h3>
<IssuedTable/>
    </div>
  );
};



const App = () => {
  const [value, setValue] = React.useState(2);

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <TabOneContent />;
      case 1:
        return <TabTwoContent />;
   
      default:
        return null;
    }
  };

  return (
    <div style={{}}>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Requested" />
          <Tab label="Issued" />
        
        </Tabs>
        {renderTabContent()}
      </Paper>
    </div>
  );
};

export default App;