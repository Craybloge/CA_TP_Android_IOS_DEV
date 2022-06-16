import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import Book from '../components/Book'


function BookScreen({ navigation }) {
  return (
    <FlatList
      style={styles.list}
      data={books}
      renderItem={({ item }) =>
        <View style={styles.book}>

          <Book book={item} navigation={navigation} />

        </View>
      }
    />
  );
}
const styles = StyleSheet.create({
  book: {
    margin: 10,
  },
  list: {
    backgroundColor: "white",
  },
});

export default BookScreen

const books = [
  {
    "key": "ISBN:9780980200447",
    "cover_url": "https://covers.openlibrary.org/b/id/5546156-L.jpg",
    "details": {
      "number_of_pages": 92,
      "title": "Slow reading",
      "subjects": [
        "Books and reading",
        "Reading"
      ],
      "publishers": [
        "Litwin Books"
      ],
      "description": "A study of voluntary slow reading from diverse angles",
      "authors": [
        {
          "key": "/authors/OL6548935A",
          "name": "John Miedema"
        }
      ],
      "publish_date": "March 2009"
    }
  },
  {
    "key": "ISBN:0385472579",
    "cover_url": "https://covers.openlibrary.org/b/id/240726-L.jpg",
    "details": {
      "number_of_pages": 159,
      "title": "Zen speaks",
      "subjects": [
        "Zen Buddhism -- Caricatures and cartoons"
      ],
      "publishers": [
        "Anchor Books"
      ],
      "description": "shouts of nothingness",
      "authors": [
        {
          "key": "/authors/OL223368A",
          "name": "Zhizhong Cai"
        }
      ],
      "publish_date": "1994"
    }
  },
  {
    "key": "ISBN:0201558025",
    "cover_url": "https://covers.openlibrary.org/b/id/135182-L.jpg",
    "details": {
      "number_of_pages": 657,
      "title": "Concrete mathematics",
      "subjects": [
        "Mathematics",
        "Computer science"
      ],
      "publishers": [
        "Addison-Wesley"
      ],
      "description": "a foundation for computer science",
      "authors": [
        {
          "key": "/authors/OL720958A",
          "name": "Ronald L. Graham"
        },
        {
          "key": "/authors/YU827398B",
          "name": "Ken Thompson"
        }
      ],
      "publish_date": "1994"
    }
  }
]
