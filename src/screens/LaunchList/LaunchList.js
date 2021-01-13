import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { View, SafeAreaView, StyleSheet } from 'react-native'
import LaunchesService from '../../services/spaceX/LaunchesService';
import LaunchTile from '../../components/LaunchTile';
import AddButton from '../../components/AddButton';
import Pagination from '../../components/Pagination';
import { SCREENS } from '../../utils/constants';

const NUMBER_OF_ITEMS_PER_PAGE = 7

export default function LaunchList({ navigation }) {
    const [allLaunces, setAllLaunces] = useState([])
    const [launches, setLaunches] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() =>{
        const fetchLaunches = async () => {
            try {
                const resp = await LaunchesService.getLaunches()
                setAllLaunces(resp);
            } catch (error) {
                // custom logger
                console.log(error)
            }
        }

        fetchLaunches()
    }, [setLaunches])

    const onTilePress = (launchData) => {
        navigation.navigate(SCREENS.LAUNCH_DETAIL, {
            launch: launchData,
        });
    }

    const onCreatePress = () => {
        navigation.navigate(SCREENS.CREATE_LAUNCH);
    }

    const renderLaunchesList = () => {
        if (!launches) {
            return <View/>
        }
    
        return launches.map((launch, index) => (
            <View style={styles.tile} key={`${index}_${launch.mission_name}`}>
                <LaunchTile launch={launch} onPress={onTilePress}/>
            </View>
        ));
    }

    const updateRenderableData = (pgNumber) => {
        const lastItem = (pgNumber * NUMBER_OF_ITEMS_PER_PAGE)
        setLaunches(allLaunces.slice(lastItem - NUMBER_OF_ITEMS_PER_PAGE, lastItem))
        setPageNumber(pgNumber)
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.launchList}>
                    {renderLaunchesList()}
                </View>
                <View style={styles.footer}>
                    <View style={styles.pagination}>
                        <Pagination
                            data={allLaunces}
                            numberPerPage={NUMBER_OF_ITEMS_PER_PAGE}
                            onChange={updateRenderableData}
                            currentPage={pageNumber}
                        />
                    </View>
                    <View style={styles.addButton}>
                        <AddButton onPress={onCreatePress} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    launchList: {
        height: '90%',
    },
    pagination: {
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    addButton: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tile: {
        marginTop: 5,
        marginBottom: 15,
    },
    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})


LaunchList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}