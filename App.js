import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BiciMap from "./assets/BiciMap.png";
import BikeState from "./assets/bikeState.png";
import Maps from "./assets/maps.jpg";
import { color } from "react-native-reanimated";


function Inicio() {
  return (
    <View>
      <Image style={styles.images} source={BiciMap} />
      <Text style={styles.titlePrincipal}>BiciApp</Text>
      <View style={styles.information}>
        <Text style={styles.normalFont}>
          <Text style={styles.titleSecundary}>Nombre:</Text> Carlos Stiven Mora
          Hoyos
        </Text>
        <Text style={styles.normalFont}>
          <Text style={styles.titleSecundary}>Bicicleta:</Text> Bicicletas de
          BMX 456
        </Text>
        <Text style={styles.normalFont}>
          <Text style={styles.titleSecundary}>Candado:</Text> Cerrado
        </Text>
        <Text style={styles.normalFont}>
          <Text style={styles.titleSecundary}>Sensor:</Text> Activo
        </Text>
        <Image source={BikeState} style={styles.bikeState}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: "100%",
    height: 300,
  },
  titlePrincipal: {
    fontSize: 50,
    textAlign: "center",
    justifyContent: "center",
  },
  titleSecundary: {
    fontSize: 22,
    color: "#6C63FF",
    fontWeight: "700",
  },
  normalFont: {
    fontSize: 20,
    margin: 4,
  },
  information: {
    alignItems: "center",
  },
  bikeState: {
    width: 140,
    height: 120,
    marginTop: 25
  },
  map:{
    height: '100%',
    width: '100%'
  },
  n_sensor_desactivado: {
    backgroundColor: '#fdfd96',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#fff',
    borderWidth: 1

  },
  n_sensor_activado: {
    backgroundColor: '#77dd77',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#fff',
    borderWidth: 1


  },
  n_candado_activado: {
    backgroundColor: '#77dd77',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#fff',
    borderWidth: 1
  },
  n_candado_desactivado: {
    backgroundColor: '#fdfd96',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#fff',
    borderWidth: 1
  },
  n_poca_bateria: {
    backgroundColor: '#FE6960',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#fff',
    borderWidth: 1

  },
  alert: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18
  }
});

function Mapa() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image 
      source={Maps}
      style={styles.map}
      />
    </View>
  );
}

function Registro() {
  return (
    <View>
      <View style={styles.n_sensor_desactivado}>
        <Text style={styles.alert}>Sensor de Movimiento: Desactivado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_poca_bateria}>
        <Text style={styles.alert}>Poca Bateria</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_sensor_activado}>
        <Text style={styles.alert}>Sensor de Movimiento: Activado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_candado_activado}>
        <Text style={styles.alert}>Candado: Activado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_candado_desactivado}>
        <Text style={styles.alert}>Candado: Desactivado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_poca_bateria}>
        <Text style={styles.alert}>Poca Bateria</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_candado_activado}>
        <Text style={styles.alert}>Candado: Activado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_sensor_desactivado}>
        <Text style={styles.alert}>Sensor de Movimiento: Desactivado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_candado_desactivado}>
        <Text style={styles.alert}>Candado: Desactivado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_sensor_activado}>
        <Text style={styles.alert}>Sensor de Movimiento: Activado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
      <View style={styles.n_candado_activado}>
        <Text style={styles.alert}>Candado: Activado</Text>
        <Text>02:35 - 16/12/2021</Text>
      </View>
    </View>
  );
}


const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen
        name="Inicio"
        component={Inicio}
        options={{ drawerLabel: "Inicio" }}
      />
      <Drawer.Screen
        name="Mapa"
        component={Mapa}
        options={{ drawerLabel: "Mapa" }}
      />
      <Drawer.Screen
        name="Registro"
        component={Registro}
        options={{ drawerLabel: "Registro" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
