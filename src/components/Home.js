import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { products } from "../ProductsAPI";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/CartSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <div className="products">
          {products.map((product, index) => {
            const { name, price, description } = product;
            return (
              <div className="box-div" key={index}>
                <Box sx={{ minWidth: 275 }}>
                  <Card
                    variant="outlined"
                    style={{ width: 320, height: 280 }}
                    className="my-card"
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Mobile Phones
                      </Typography>
                      <Typography variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Price:{price}$
                      </Typography>
                      <Typography variant="body2">{description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={
                          (e) => dispatch(addItem({ price: price })) // we pass the payload in additem
                        }
                      >
                        add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;
