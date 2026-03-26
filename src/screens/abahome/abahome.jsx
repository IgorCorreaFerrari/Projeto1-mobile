import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import Barbeador from "../../components/barbeador/barbeador.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function AbaHome(props) {

    const [barbeadores, setBarbeador] = useState([]);

    function ClickBarbeador(id_barbeador, name, specialty, icon) {
        props.navigation.navigate("services", {
            id_barbeador,
            name,
            specialty,
            icon
        });
    }

    async function Loadbarbeador() {
        try {
            const response = await api.get("/barbeadores");

            if (response.data)
                setBarbeador(response.data);


        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    useEffect(() => {
        Loadbarbeador();
    }, []);


    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços do barbeador</Text>

        <FlatList data={barbeadores}
            keyExtractor={(doc) => doc.id_barbeador}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Barbeador id_barbeador={item.id_barbeador}
                    name={item.name}
                    icon={item.icon} // M ou F
                    specialty={item.specialty}
                    onPress={ClickBarbeador}
                />
            }} />
    </View>
}

export default AbaHome;