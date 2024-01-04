import { Dispatch, SetStateAction } from "react";
import style from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

interface propsCart {
  showCart: boolean;
  setCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ showCart, setCart }: propsCart) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <>
      {showCart && (
        <div className={style.bg} onClick={() => setCart(false)}>
          <motion.div
            animate={showCart ? "open" : "closed"}
            variants={variants}
            className={style.mainCart}
          >
            <div className={style.upper}>
              <h2>Cart</h2>
              <CloseIcon
                onClick={() => setCart(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <hr style={{ width: "100%" }}></hr>
            <div className={style.lower}>
              <h2>Order Something</h2>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Cart;
