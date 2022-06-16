import { TextPropTypes, View } from "react-native";
import { Button, Linking, Pressable, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Book(props) {
  return (
    <Card mode="outlined">
      {/* <Card.Title title={props.book.details.title} subtitle={props.book.details.description}/> */}
      <Card.Content>
        <Title>{props.book.details.title}</Title>
        <Paragraph style={styles.paragraph}>
          {props.book.details.description}{'\n'}
          Written by
          {props.book.details.authors.map((item, key) => (
            <Text key={key} style={styles.person}> {item.name} </Text>)
          )} {'\n'}
          Published by <Text style={styles.person}>{props.book.details.publishers} {'\n'}</Text>
          <Text style={styles.date}>{props.book.details.publish_date}</Text>
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Pressable onPress={() => props.navigation.navigate('Details', { book: props.book })}>
          <Text style={styles.detail}>DETAILS</Text>
        </Pressable>
      </Card.Actions>
    </Card>)
}

const styles = StyleSheet.create({

  paragraph: {
    fontSize: 12
  },
  person: {
    fontWeight: 'bold'
  },
  date: {
    fontStyle: 'italic'
  },
  detail: {
    color: "#6200EE",
    fontWeight: 'bold',
    margin: 10,
    fontSize: 16
  },
})