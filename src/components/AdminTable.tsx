import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/components/adminTable.scss";

const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "سینا احمدی",
    date: "1 March",
    amount: 785,
    status: "approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "مهدی سلیمانی",
    date: "1 March",
    amount: 900,
    status: "pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "رضا مولایی",
    date: "1 March",
    amount: 35,
    status: "pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "وحید رحمانی",
    date: "1 March",
    amount: 920,
    status: "approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "یوسف جمشیدی",
    date: "1 March",
    amount: 2000,
    status: "pending",
  },
];

const AdminTable = () => {
  return (
    <div className="admin-table">
      {!rows.length ? <p>تراکنشی موجود نیست</p> : ""}
      {rows.length && <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-cell">شناسه</TableCell>
              <TableCell className="table-cell">محصول</TableCell>
              <TableCell className="table-cell">مشتری</TableCell>
              <TableCell className="table-cell">تاریخ</TableCell>
              <TableCell className="table-cell">مقدار</TableCell>
              <TableCell className="table-cell">وضعیت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="table-cell">{row.id}</TableCell>
                <TableCell className="table-cell">
                    <div className="cell-wrapper">
                        <img src={row.img} alt={row.product} className="image" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="table-cell">{row.customer}</TableCell>
                <TableCell className="table-cell">{row.date}</TableCell>
                <TableCell className="table-cell">{row.amount}</TableCell>
                <TableCell className="table-cell"><span className={`status ${row.status}`}>{row.status === "approved" ? "تایید شده" : "در انتظار"}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </div>
  );
};

export default AdminTable;
