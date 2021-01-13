import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
    SafeAreaView, 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import BackButton from '../../components/BackButton';
import I18n from '../../utils/i18n';
import globalStyles from '../../utils/globalStyles';

export default function CreateLaunch({ navigation }) {
    const [name, onChangeName] = useState('');
    const [description, onChangeDesc] = useState('');
    const [image, setImage] = useState(I18n.t('create_launch_screen_default_image'))

    const openGallery = () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 200,
        }

        launchImageLibrary(options, (respo) => {
            setImage(respo.uri)
        })
    }

    const save = () => {
        // save data 
        console.log(name, description, image)
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <SafeAreaView style={styles.container}>
                <View style={styles.inputsContainer}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image}
                            source={{ uri: image }} 
                        />
                        <TouchableOpacity 
                            style={styles.addImageButton} 
                            onPress={() => openGallery()}
                        >
                            <Text>
                                {I18n.t('create_launch_screen_add_image_text')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput 
                        style={styles.input}
                        placeholder={I18n.t('create_launch_screen_input_name_placeholder')}
                        value={name}
                        onChangeText={(text) => onChangeName(text)}
                        autoFocus
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={I18n.t('create_launch_screen_input_description_placeholder')}
                        value={description}
                        onChangeText={(text) => onChangeDesc(text)}
                    />
                </View>
                <View style={styles.navigation}>
                    <BackButton onPress={() => navigation.goBack()}/>
                    <TouchableOpacity style={styles.submitButton} onPress={save}>
                        <Text>
                            {I18n.t('create_launch_screen_submit_button_text')}
                        </Text>
                    </TouchableOpacity>
                </View>               
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    addImageButton: {
        marginTop: 10,
    },
    submitButton: {
        width: '80%',
        backgroundColor: globalStyles.colors.white,
        borderColor: globalStyles.colors.black,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: globalStyles.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 3,
    },
    navigation: {
        padding: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageContainer:{
        marginTop: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    image: {
        width: '50%',
        height: 200,
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        height: 27,
        borderColor: 'black',
        marginBottom: 25,
        paddingLeft: 10,
    },
    inputsContainer: {
        padding: 20,
    }
})

CreateLaunch.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
}