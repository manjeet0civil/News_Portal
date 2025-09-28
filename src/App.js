import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { filterData, getNewsUrl } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Search from "./Components/Search.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  // const [courses, setCourses] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("latest");

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = getNewsUrl(category);
      console.log("🔗 Fetching URL:", url);
      const res = await fetch(url);
      console.log("🔗 Response Status:", res.status);
      let output = null;
      try {
        output = await res.json();
        console.log("📄 Full API Response:", output);
        console.log("🔗 Response Data:", output); // Same data, different label
        console.log("📊 Articles count:", output?.articles?.length || 0);
      } catch (error) {
        console.log("❌ Error parsing JSON:", error);
        output = null;
      }

      // Save data
      if (!res.ok) {
        console.log("❌ Request failed - Status:", res.status);
        console.log("❌ Error response:", output);
        toast.error(output?.message || `Request failed (${res.status})`);
        setCourses([]);
      } else {
        console.log("✅ Success! Setting articles:", output?.articles?.length || 0);
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
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

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
