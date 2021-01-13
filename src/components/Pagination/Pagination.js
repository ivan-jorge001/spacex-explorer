import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NUMBER_OF_PAGES_SHOWING = 7;
export default function Pagination({ data, numberPerPage = 1, onChange, currentPage }) {
    const [numberOfPages, setNumberOfPages] = useState(0);

    useEffect(() => {
        let numberOfTotalPages = data.length / numberPerPage

        if (
            numberOfTotalPages > 0 
            && Math.floor(numberOfTotalPages) === Math.round(numberOfTotalPages)
        ) {
            numberOfTotalPages--;
        }

        setNumberOfPages(Math.floor(numberOfTotalPages))
        onChange(numberOfTotalPages > 1 ? 1 : 0)
    }, [data])

    const onIndexPress = (page) => {
        onChange(page)
    };

    const renderPageIndex = (idx) => (
        <TouchableOpacity  
            key={idx} 
            style={styles.pageIndex}
            onPress={() => onIndexPress(idx)}
        >
            <Text style={styles.selected(currentPage === idx)}>
                {idx}
            </Text>
        </TouchableOpacity>
    )

    const renderIndexSeparator = (idx) => (
        <View key={idx} style={styles.pageIndex}>
            <Text>...</Text>
        </View>
    )

    const renderPages = () => {
        pagesIndex = [];
        let foundViewAbleIndex = false

        return Array(numberOfPages).fill(0).map((_, index) => {
            const idx = index + 1

            if (
                // page index 1 will always show
                idx === 1
                // last page index will always show
                || idx === numberOfPages
                // current page will always show
                || idx === currentPage 

                // basically when we are navigating the inner pages 1...2,3,4...20
                || idx === (currentPage + 1)
                || idx === (currentPage - 1)

                // the begging when the current page is between 1-4 we will 
                // render those pages index plus the next index (5) so there will 
                // be 5 pages render in the begging plus (...) and (last page) total of 7 pages
                || (currentPage <= NUMBER_OF_PAGES_SHOWING - 3 && idx < NUMBER_OF_PAGES_SHOWING - 1)

                // when the current page is between (lastpage - 4)-lastpage we will 
                // render those pages index plus the previos index (lastpage - 5) so there will 
                // be 5 pages render in the end plus (...) and (page 1) total of 7 pages
                || (currentPage > numberOfPages - (NUMBER_OF_PAGES_SHOWING - 3) && idx >= numberOfPages - (NUMBER_OF_PAGES_SHOWING - 3))
            ) {       
                foundViewAbleIndex = true         
                return renderPageIndex(idx)
            } else {
                if (foundViewAbleIndex) {
                    foundViewAbleIndex = false
                    return renderIndexSeparator(idx)
                }

                return null;
            }

        }).filter(Boolean)
    }

    return (
        <View style={styles.container}>
            {!!numberOfPages && renderPages()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    pageIndex: {
        width: 20,
        height: 20,
    },
    selected: (selected) => ({
        textDecorationLine: selected ? 'underline' : 'none',
    })
})

Pagination.propTypes = {
    data: PropTypes.array,
    numberPerPage: PropTypes.number,
    onChange: PropTypes.func,
    currentPage: PropTypes.number,
}

Pagination.defaultProps = {
    data: [],
    numberPerPage: 1,
    onChange: Function.prototype,
    currentPage: 1,
}
