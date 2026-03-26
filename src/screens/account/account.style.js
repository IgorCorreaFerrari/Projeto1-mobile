import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.gray4,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },
    containerLogo: {
        padding: 200,
        alignItems: "center"
    },
    logo: {
        width: 500,
        height: 140
    },
    containerInput: {
        marginBottom: 15
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        //flexDirection: "row"
    },
    footerLink: {
        color: COLORS.blue
    },

    /* contentContainer: {
  flex: 1,
  backgroundColor: '#fff',        // ou a cor que quiser
  margin: 20,                     // separa do fundo
  borderRadius: 20,               // opcional
  padding: 30,
  justifyContent: 'center',
  shadowColor: '#000',            // sombra suave
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 5,                   // para Android
  justifyContent: "space-between"
}, */

}