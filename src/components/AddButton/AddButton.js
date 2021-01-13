import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from '../../utils/globalStyles';
import I18n from '../../utils/i18n';

export default function AddButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.addSign}>
                {I18n.t('plus_sign')}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: globalStyles.black,
    },
    addSign: {
        textAlign: 'center',
        fontSize: 28,  
        flex: 1,
        fontWeight: '600',
        padding: 0,
        margin: 0,
    },
})

AddButton.defaultProps = {
    onPress: Function.prototype,
}

AddButton.propTypes = {
    onPress: PropTypes.func,
}
