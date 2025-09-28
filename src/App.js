import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Search from "./Components/Search.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  // const [courses, setCourses] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("latest");
  const [query, setQuery] = useState("latest");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}${category}`);
      let output = null;
      try {
        output = await res.json();
      } catch (_) {
        output = null;
      }

      // Save data
      if (!res.ok) {
        console.log("API error", { status: res.status, body: output });
        toast.error(output?.message || `Request failed (${res.status})`);
        setCourses([]);
      } else {
        setCourses(Array.isArray(output?.articles) ? output.articles : []);
      }
      // setCourses(output);
    } catch (err) {
      toast.error("Something Went Wrong");
      console.log("not able to fetch data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="w-11/12  mx-auto max-w-[1200px] flex flex-wrap justify-center items-center m-0 pt-3">
        <Search  setCategory={setCategory} />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
            setQuery={setQuery}

          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loading ? (
              <Spinner />
            ) : (
              <Cards courses={courses} category={category} />
            )
          }

        </div>

      </div>
      <div className="mb-0" > 
        <Footer  />
      </div>
    </div>
  );
};

export default App;
