import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import BackButton from '../../components/BackButton';
import globalStyles from '../../utils/globalStyles';

export default function LaunchDetail({ route, navigation }) {
    const launch = route && route.params && route.params.launch;
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.launchImage} source={{ uri: launch?.links?.mission_patch }} />
                    <View style={styles.imageText}>
                        <Text style={styles.imageTextTitle} >
                            {launch?.mission_name}
                        </Text>
                        <Text style={styles.imageTextSubTitle}>
                            {(launch?.details)}
                        </Text>
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.footer}>
                        <BackButton onPress={() => navigation.goBack()}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    footerContainer: {
        height: '40%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    footer: {
        height: 30,
        paddingHorizontal: 15,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    launchImage: {
        resizeMode: "contain",
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        height: '60%',
        width: '100%',
        position: 'relative',
    },
    imageText: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 20,
        backgroundColor: globalStyles.colors.overlayColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    imageTextTitle: {
        fontSize: globalStyles.fontSize.medium,
        fontWeight: 'bold',
        textAlign: 'right',
        color: globalStyles.colors.white,
    },
    imageTextSubTitle: {
        fontSize: globalStyles.fontSize.small,
        fontWeight: 'bold',
        textAlign: 'right',
        color: globalStyles.colors.white,
    },
})

LaunchDetail.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
    route: PropTypes.shape({
        params: PropTypes.shape({
            launch: PropTypes.shape({
                mission_name: PropTypes.string,
                details: PropTypes.string,
                links: PropTypes.shape({
                    mission_patch: PropTypes.string,
                }),
            }).isRequired,
        }).isRequired,
    }).isRequired,
}