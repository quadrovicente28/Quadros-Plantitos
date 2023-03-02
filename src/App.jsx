import { Routes, Route, Link } from "react-router-dom";

// Layout
import Mainlayout from "./Layouts/Mainlayout";
import BasicLayout from "./Layouts/BasicLayout";
import AdminLayout from "./Layouts/AdminLayout";

//auth
import RequireAuth from "./controlledRoutes/RequireAuth";
import PrivateRoutes from "./controlledRoutes/PrivateRoutes";

// Pages
import Error404 from "./Pages/Error404";
import Journal from "./Pages/Journal";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop/Shop";
import Home from "./Pages/Home";
import Searchpage from "./Pages/Searchpage";
import Login from "./Pages/authentication/Login";
import Register from "./Pages/authentication/Register";
import ForgotPassword from "./Pages/authentication/Forgotpassword";
import ResetPassword from "./Pages/authentication/ResetPassword";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Shop/Cart";

// CSS import
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import AddShopItem from "./admin/AddShopItem";
import AddJournalEntry from "./admin/AddJournalEntry";
import JournalEntry from "./Pages/JournalEntry";
import ShopItem from "./Pages/Shop/ShopItem";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route element={<Mainlayout />}> 
            <Route path="/addshopitem" element={<AddShopItem />} />
            <Route path="/addjournal" element={<AddJournalEntry />} />
          </Route>
        </Route>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopitem/:id" element={<ShopItem />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/mycart" element={<Cart />} />
          <Route path="/journalentry" element={<JournalEntry />} />

          <Route element={<RequireAuth/>} >
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route element={<BasicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="*" element={<Error404 />}></Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
