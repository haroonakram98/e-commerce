import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { useQuery } from 'react-query'
import { NavInput } from "./SideNav.styled";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";
import Typography from "../../Shared/UI/Typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpShortWide,
  faArrowUpWideShort,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { getAllCategories } from "../../../services/api";



const StyledStack = styled(Stack)`
  width: 25%;

  @media (max-width: 898px) {
    width: 100%;
  }
`;

const SideNav = ({
  onCategoryChange,
  onSortChange,
  onPriceRangeFilter,
  onSearch,
}) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const [sortOrder, setSortOrder] = useState("asc");

  const { isLoading: getAllCategoriesLoading, data: categoriesNames} = useQuery('products', getAllCategories)

  const handleSortChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    if (onSortChange) {
      onSortChange(newSortOrder);
    }
  };

  const handleCategoryChange = useCallback(
    (item) => {
      setSelectedCategory(item);

      if (onCategoryChange) {
        onCategoryChange(item);
      }
    },
    [onCategoryChange]
  );

  const handlePriceRangeChange = (min, max) => {
    if (onPriceRangeFilter) {
      onPriceRangeFilter(min, max);
    }
  };

  return (
    <StyledStack className="px-3 d-block">
      <NavInput
        placeholder="Search products"
        className="py-2 mb-5"
        onChange={(e) => onSearch(e)}
      />
      <Stack>
        <Stack
          direction="horizontal"
          className="justify-content-between mb-3 align-items-center"
        >
          <Typography className="mb-0" fs="fs4" fw="bold">
            Price Range
          </Typography>
          <FontAwesomeIcon icon={faFilter} />
        </Stack>
        <PriceRangeFilter min={0} max={1000} onChange={handlePriceRangeChange} />
      </Stack>
      <Stack direction="horizontal" className="justify-content-between mb-3">
        <Typography className="mb-3" fs="fs4" fw="bold">
          Sort
        </Typography>
        {sortOrder === "asc" ? (
          <FontAwesomeIcon
            icon={faArrowUpShortWide}
            onClick={handleSortChange}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowUpWideShort}
            onClick={handleSortChange}
            style={{ cursor: "pointer" }}
          />
        )}
      </Stack>

      <Stack>
        <Typography className="mb-3" fs="fs4" fw="bold">
          Product Categories
        </Typography>
        <Stack>
          {categoriesNames?.map((category) => {
            return (
              <Stack
                key={category}
                direction="horizontal"
                className="justify-content-between align-items-center"
                onClick={() => handleCategoryChange(category)}
                style={{ cursor: "pointer" }}
              >
                <Typography
                  fs="fs3"
                  color={category === selectedCategory ? "primary" : "black"}
                  fw={category === selectedCategory ? "medium" : "regular"}
                  textTransform="capitalize"
                  className="mb-3"
                >
                  {category}
                </Typography>
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </StyledStack>
  );
};

export default SideNav;