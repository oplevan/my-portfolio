import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { filters, portfolio } from "../../components/data/customData";
import { GridItem, Navbar, Button, useFullPageLoader, ParticlesBgr } from "../../components";

import "./portfolio.scss";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [displayedItems, setDisplayedItems] = useState(portfolio);
  const [count, setCount] = useState();

  useEffect(() => {
    let items = document.querySelectorAll(".MuiGrid-container .MuiGrid-item").length;

    if (filter !== "all") {
      setCount(items);
    }
  }, [displayedItems]);

  useEffect(() => {
    fetchData();
    const filteredList = portfolio.map((item) => ({
      ...item,
      activeFilter: item.category.includes(filter),
    }));
    setDisplayedItems(filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 600);
  };

  const filterItems = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <Navbar />
      <Box component="main">
        <ParticlesBgr />
        <Container maxWidth="lg" component="section">
          <h1>Portfolio</h1>
          <p align="left">
            From small Web Applications and UI/UX animations to ReactJS, Redux Apps. Check out my latest web development portfolio
            projects.
          </p>
          <div className="filters">
            {filters.map((item) => (
              <Button
                key={item.filter}
                type="default"
                title={item.title}
                filter={item.filter}
                clickHandler={{ func: filterItems, args: item.filter }}
                extraClassName={filter === item.filter && "active"}
              />
            ))}
            {filter === "all" ? (
              <small>Showing all projects. Use the filter above to list them by skill or technology.</small>
            ) : (
              <small>
                Showing <strong>{count}</strong> {count > 1 ? "items" : "item"} filtered by <strong>{filter}</strong>.
              </small>
            )}
          </div>
        </Container>
        <Container maxWidth="lg" component="section">
          <Grid container spacing={5} justifyContent="center">
            {displayedItems.map((item) => (item.activeFilter ? <GridItem key={item.id} {...item}></GridItem> : ""))}
          </Grid>
        </Container>
      </Box>
      {loader}
    </>
  );
}
