import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/View/client/Layout/Layout";
import Home from "./Routes/View/client/home/Home";
import Blogs from "./Routes/View/client/blog/Blogs";
import Contact from "./Routes/View/client/contact/Contact";
import About from "./Routes/View/client/about/About";
import Register from "./Routes/View/Auth/Register";
import Login from "./Routes/View/Auth/Login";
import Error from "./components/404/Error";
import Forum from "./Routes/View/client/Forum/Forums";
import Recipe from "./Routes/View/client/Recipe/Recipe";
import Shop from "./Routes/View/client/Shop/Shop";
import RecipeItemsPage from "./Routes/View/client/Recipe/RecipeItemsPage";
import RecipeDetails from "./Routes/View/client/Recipe/RecipeDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/products" element={<RecipeItemsPage />} />
          <Route path="/recipe/products/:id" element={<RecipeDetails />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/auth">
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
