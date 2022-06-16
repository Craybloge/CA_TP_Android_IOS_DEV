import { Text, View, StyleSheet, Image } from 'react-native';
function DetailsScreen({ route, navigation }) {
  const book = route.params.book;
  navigation.setOptions({ title: book.details.title })
  return (
    <View>
      <View style={{
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Image
          style={styles.logo}
          source={{
            uri: book.cover_url,
          }} />
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
      }}>
        {book.details.subjects.map((item, key) => (
          <Text key={key} style={styles.theme}> {item} </Text>)
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: "contain",
    width: 150,
    height: 350,
  },
  theme: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    backgroundColor: "lightgrey"
  },
});
export default DetailsScreen