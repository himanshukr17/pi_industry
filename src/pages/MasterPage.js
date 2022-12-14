import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Container, Box } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getTableData, getTableCount } from "api";
import AppBar from "../components/AppBar";

const columns = [
  { field: "EmployeeID", headerName: "EmployeeID", width: 250 },
  { field: "FirstName", headerName: "FirstName", flex: 1 },
  { field: "LastName", headerName: "LastName", flex: 1 }
];

const PAGE_SIZE = 15;

const MasterPage=()=> {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Number of rows which exist on the service
  const [rowCount, setRowCount] = useState(0);

  const loadData = async (isFirstLoad, skip = 0) => {
    try {
      setItems([]);
      setLoading(true);

      if (isFirstLoad) {
        const count = await getTableCount();
        setRowCount(count);
      }

      const _items = await getTableData({
        $top: PAGE_SIZE,
        $skip: skip
      });
      const itemsWithIds = _items.map((item, index) => {
        item.id = index;
        return item;
      });
      setItems(itemsWithIds);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();
// const func = ()=>{
//   navigate('/route')
// }

  const handlePageChanged = ({ page }) => {
    loadData(false, page * PAGE_SIZE);
  };

  useEffect(() => {
    // when component mounted
    loadData(true);
  }, []);

  return (
    
    <>
      <AppBar/>
{/* <button onClick={()=>navigate("/route")}>press me</button> */}
      {/* <Box height="80vh" py={5}>
        <DataGrid
          loading={loading}
          rows={items}
          columns={columns}
          pageSize={PAGE_SIZE}
          paginationMode="server"
          rowCount={rowCount}
          onPageChange={handlePageChanged}
        />
      </Box> */}
    </>
  );
}

export default (MasterPage)
