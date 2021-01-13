import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import stringsManipulation from '../../utils/stringManipulation';
import globalStyles from '../../utils/globalStyles';

const MAX_NUMBER_OF_CHAR_IN_DETAILS = 100;
export default function LaunchTile({ launch, onPress }) {

    return (
        <TouchableOpacity onPress={() => onPress(launch)} style={styles.container}>
            <Image 
                style={styles.shipImage} 
                source={{ uri: launch?.links?.mission_patch }} 
            />
            <View style={styles.details}>
                <Text>
                    {launch?.mission_name}
                </Text>
                <Text>
                    {stringsManipulation.truncate(launch?.details, MAX_NUMBER_OF_CHAR_IN_DETAILS)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    shipImage: {
        height: '100%',
        width: '20%',
        borderColor: globalStyles.colors.gray,
        borderWidth: 1,
    },
    details: {
        paddingHorizontal: 10,
        paddingTop: 2,
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
})

LaunchTile.propTypes = {
    launch: PropTypes.shape({
        mission_name: PropTypes.string,
        details: PropTypes.string,
        links: PropTypes.shape({
            mission_patch: PropTypes.string,
        }),
    }),
    onPress: PropTypes.func,
}

LaunchTile.defaultProps = {
    onPress: Function.prototype,
    launch: {}, 
}
