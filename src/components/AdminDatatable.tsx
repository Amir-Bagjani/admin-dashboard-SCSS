import { useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows, userColumns } from "../Data/datatable";
import "../styles/components/adminDatatable.scss";

const AdminDatatable = () => {
  const [data, setData] = useState(userRows);
  const loc = useLocation();
  let location = loc.pathname.split("/")[1];

  const deleteData = useCallback(
    (id: number) => {
      setData(data.filter((item) => item.id !== id));
    },
    [data]
  );

  const actionColumn: GridColDef[] = useMemo(
    () => [
      {
        field: "action",
        headerName: "اکشن",
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
          return (
            <div className="cell-action">
              <Link to="123">
                <div className="view-button">مشاهده</div>
              </Link>
              <div
                className="delete-button"
                onClick={() => deleteData(params.row.id)}
              >
                حذف
              </div>
            </div>
          );
        },
      },
    ],
    [deleteData]
  );

  return (
    <div className="admin-datatable">
      <div className="top">
        <h3 className="title">
          {location === "users" ? "کاربرها" : "محصول ها"}
        </h3>
        {location === "users" ? (
          ""
        ) : (
          <Link className="link" to="new">
            اضافه کردن محصول جدید
          </Link>
        )}
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminDatatable;
