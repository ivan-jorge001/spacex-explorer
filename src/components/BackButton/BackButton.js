import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../utils/globalStyles';
import I18n from '../../utils/i18n';

export default function BackButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.backArrow}>
                {I18n.t('back_arrow')}
            </Text> 
            <Text style={styles.backText}>
                {I18n.t('back_text')}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backArrow: {
        fontSize: globalStyles.fontSize.large,
        fontWeight: globalStyles.fontWeight.normal,
    },
    backText: {
        fontSize: globalStyles.fontSize.smal,
        fontWeight:  globalStyles.fontWeight.normal,
        marginLeft: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

BackButton.defaultProps = {
    onPress: Function.prototype,
}

BackButton.propTypes = {
    onPress: PropTypes.func,
}

