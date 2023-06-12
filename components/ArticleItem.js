import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleItem = ({ article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt, content } = article;

  return (
    <View style={styles.container}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <View>
      <Text>{author}</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{publishedAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default ArticleItem;