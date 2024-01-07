import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function App() {
  return (
    <View style={styles.container}> {/* Main container */}
      <View style={styles.homeRectangleContainer}> {/* Position the rectangle */}
        <View style={styles.homeRectangle}> {/* Rectangle with title */}
          <Text style={styles.homeRectangleTitle}>Home</Text>
        </View>
      </View>
    <View style={styles.Container}>
      <View style={styles.mapContainer}> {/* Container for the map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.747274222966!2d121.1485674781354!3d14.677561123294078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bbfc5993bfa1%3A0x8c02786f2a23ccc7!2sAdventure%20Farm!5e0!3m2!1sen!2sph!4v1704433119485!5m2!1sen!2sph"
          style={{ border: "0", width: "390px", height: '300px' }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </View>
      <View style={styles.Container}> {/* Container for the text */}
        <Text style={styles.textTitle}>Soil Nutrient Mapping App</Text>
        <Text style={styles.textDescription}>
          A mobile application that can map the nutrients (pH level, moisture content,
          and NPK values) using the soil robot collector
        </Text>
      </View>

      <View style={styles.buttonContainer}> {/* Container for the button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB9790',
  },
  fixedContentContainer: {
    flex: 1, // Make it fill the remaining space
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    marginTop: 20, // Example margin
    marginBottom: 20, // Example margin
  },
  mapContainer: {
    // Container for the map
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40, // Example margin
    marginBottom: 40, // Example margin

  },
  textContainer: {
    // Container for the text
    padding: 20, // Added padding for text
    marginBottom: 20, // Added margin below text
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontStyle: 'poppins',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  textDescription: {
    fontSize: 16,
    fontStyle: 'poppins',
    fontWeight: 'normal',
    alignContent: 'center',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  buttonContainer: {
    // Container for the button
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Example margin
  },
  addButton: {
    backgroundColor: '#795548',
    width: 106,
    height: 33,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
  addButtonLabel: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  homeRectangleContainer: {
    // Adjust positioning and layout as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Example margin
  },
  homeRectangle: {
    backgroundColor: '#795548', // Adjust background color
    padding: 20,
    borderRadius: 20,
    width: '100%', // Adjust width
    height: 55, // Adjust height
  },
  homeRectangleTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontStyle: 'poppins',
    fontWeight: 'bold',
    marginLeft: 10,
    bottom: 5,
  },
});
