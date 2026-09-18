import { View, Text, StyleSheet } from "react-native";

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Awesome Looking Map of Your Life</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    },
});