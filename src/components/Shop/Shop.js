import React, { useMemo } from "react";
import { useQuery } from 'react-query'
import { Container, Stack } from "react-bootstrap";
import theme from "../../theme/theme";
import { useEffect, useState } from "react";
import SideNav from "./SideNav/SideNav";
import Products from "./Products/Products";
import { getCategoriesInfo, getProducts } from "../../services/api";

const ProductsShop = () => {
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 1000,
    });
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("electronics");


    const { data: products } = useQuery({ queryKey: ['products', sortOrder], queryFn: ({ queryKey }) => getProducts(queryKey[1]) })
    const { data: productsInCategory } = useQuery({ queryKey: ['categories', selectedCategory], queryFn: ({ queryKey }) => getCategoriesInfo(queryKey[1]) })

    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory)
    };

    const handleSortChange = (sortOrder) => {
        setSortOrder(sortOrder);
    };

    const handlePriceRangeFilterChange = (min, max) => {
        setPriceRange({ min, max })
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = useMemo(() => {
        if (searchQuery.trim() === '' && (priceRange.min <= 0 && priceRange.max >= 100) && selectedCategory === null) {
            return products;
        }

        let filtered = products;

        if (productsInCategory) {
            filtered = productsInCategory;
        }

        return filtered?.filter((product) => {
            const nameMatches = product.title.toLowerCase().includes(searchQuery.toLowerCase());
            const priceInRange = product.price >= priceRange.min && product.price <= priceRange.max;
            return nameMatches && priceInRange;
        });
    }, [products, searchQuery, priceRange.min, priceRange.max, productsInCategory]);

    return (
        <Stack style={{ background: theme.palette.light }} className="py-5">
            <Container className="d-lg-flex align-items-start">
                <SideNav
                    onCategoryChange={handleCategoryChange}
                    onSortChange={handleSortChange}
                    onPriceRangeFilter={handlePriceRangeFilterChange}
                    onSearch={handleSearch}
                />
                <Products data={filteredProducts} />
            </Container>
        </Stack>
    );
};

export default ProductsShop;