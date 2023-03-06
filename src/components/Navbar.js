import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/CartSlice";

const Navbar = () => {
  // const items = useSelector((state) => state);  // old rdux feature
  const items = useSelector(getItemSelector); // redux toolkit feature
  const total = items.reduce((a, b) => a + b.price, 0); // for calclulating total
  return (
    <div>
      <div className="cart-item">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Shopix
              </Typography>
              <p style={{ fontSize: 20 }}>Total (${total}) &nbsp;</p>{" "}
              &nbsp;&nbsp;
              <AiOutlineShoppingCart
                size={35}
                style={{ cursor: "pointer" }}
              />{" "}
              <span style={{ color: "yellow", fontSize: 18 }}>
                {items.length}
              </span>{" "}
              &nbsp; &nbsp;
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
