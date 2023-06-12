import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ArticleDetailScreen = ({ article, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Image source={{ uri: article.urlToImage }} style={styles.image} />

      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.author}>{article.author}</Text>
      <Text style={styles.source}>{article.source.name}</Text>
      <Text style={styles.publishedAt}>{article.publishedAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    marginBottom: 4,
  },
  source: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  publishedAt: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ArticleDetailScreen;