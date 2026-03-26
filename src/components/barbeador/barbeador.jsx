import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./barbeador.style.js";
import icon from "../../constants/icon.js";

function Barbeador(props) {
    return <TouchableOpacity style={styles.barbeador}
        onPress={() => props.onPress(props.id_barbeador, props.name,
            props.specialty, props.icon)}>
        <Image source={props.icon == "M" ? icon.male : icon.female} style={styles.icon} />

        <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.specialty}>{props.specialty}</Text>
        </View>
    </TouchableOpacity>
}

export default Barbeador;